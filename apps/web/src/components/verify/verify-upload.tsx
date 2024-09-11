import { useEffect, useState } from "preact/hooks";
import { DropZone, Button, FileTrigger } from "react-aria-components";
import clsx from "clsx";

import type { FunctionComponent, ComponentProps } from "preact";

function base64ToUint8Array(base64: string) {
	const binaryString = atob(base64);
	const len = binaryString.length;
	const bytes = new Uint8Array(len);
	for (let i = 0; i < len; i++) {
		bytes[i] = binaryString.charCodeAt(i);
	}
	return bytes;
}

async function createObjectURL(file: File) {
	const buffer = await file.arrayBuffer();
	const blob = new Blob([buffer], { type: "image/svg+xml" });
	return URL.createObjectURL(blob);
}

type DropzoneProps = ComponentProps<typeof DropZone>
type FileTriggerProps = ComponentProps<typeof FileTrigger>

const PUBLIC_KEY = base64ToUint8Array("MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfybPmda7WiwqVMphb1/ETpEvNDaUPA/y/mYUkgJz4t+CEskFu/wvIkmbsCtIHz80Vd0PJTYxBdXwKTM+IhCcMw==");

export const VerifyUpload: FunctionComponent = () => {
	const [file, setFile] = useState<File | null>(null);
	const [url, setUrl] = useState<string | null>(null);
	const [isValid, setValid] = useState<boolean | null>(null);

	const onVerify = () => {
		if (!file) {
			return;
		}

		const reader = new FileReader();

		reader.onload = async (e) => {
			let svg = e.target?.result as string;

			const commentMatch = svg.match(/<!--(.*?)-->/);
			const signatureString = commentMatch[1].trim();

			svg = svg.replace(signatureString, "SIGNATURE");

			const { buffer } = new TextEncoder().encode(svg);

			const signature = base64ToUint8Array(signatureString);

			const publicKey = await crypto.subtle.importKey(
				"spki",
				PUBLIC_KEY,
				{
					name: "ECDSA",
					namedCurve: "P-256"
				},
				false,
				["verify"]
			);

			const isValid = await crypto.subtle.verify(
				{
					name: "ECDSA",
					hash: { name: "SHA-256" }
				},
				publicKey,
				signature,
				buffer
			);

			setValid(isValid);
		};

		reader.onerror = () => {

		};

		reader.readAsText(file);
	};

	const onClear = () => {
		setFile(null);
		setUrl(null);
		setValid(null);
	};

	const onDrop: DropzoneProps["onDrop"] = async (e) => {
		const [droppedFile] = e.items
			.filter(item => item.kind === "file")
			.filter(file => file.type === "image/svg+xml");

		if (!droppedFile) {
			console.error("Invalid file type");
			return;
		}
		
		const file = await droppedFile.getFile();
		const url = await createObjectURL(file);

		setFile(file);
		setUrl(url);
	};

	const onSelect: FileTriggerProps["onSelect"] = async (e) => {
		if (!e) {
			console.error("TODO: Handle");
			return;
		}

		const [file] = Array.from(e)
			.filter(file => file.type === "image/svg+xml");

		if (!file) {
			console.error("TODO: Handle");
			return;
		}

		const url = await createObjectURL(file);

		setFile(file);
		setUrl(url);
	};

	const className: DropzoneProps["className"] = ({ isDropTarget }) => clsx(
		"flex aspect-video flex-col items-center justify-center gap-lg border-2 transition-colors",
		{
			"border-dashed": !isDropTarget && !url,
			"bg-brand-500 border-solid": isDropTarget
		}
	);

	return (
		<>
			<DropZone aria-label="Drop SVG file for verification" onDrop={onDrop} getDropOperation={(types) => types.has("image/svg+xml") ? "move" : "cancel"} className={className}>
				<FileTrigger onSelect={onSelect} acceptedFileTypes={["image/svg+xml"]}>
					{url && file ? (
						<Button className="size-full center">
							<span className="sr-only">Select SVG</span>
							<img src={url} alt={`SVG file with id '${file.name.replace(".svg", "")}'.`} />
						</Button>
					) : <Button data-btn="primary" className="w-auto">Select SVG</Button>}
				</FileTrigger>
			</DropZone>

			<ul className="mt-lg flex gap-lg">
				<li className="grow basis-1/2">
					<button data-btn="secondary" disabled={!file} onClick={onClear}>Remove file</button>
				</li>
				<li className="grow basis-1/2">
					<button data-btn="primary" disabled={!file} onClick={onVerify}>Verify</button>
				</li>
			</ul>
		</>
	);
};
