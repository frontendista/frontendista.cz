import { useState } from "preact/hooks";
import { DropZone, Button, FileTrigger } from "react-aria-components";
import clsx from "clsx";

import type { FunctionComponent, ComponentProps } from "preact";
import { Icon } from "../common/icon";

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
			try {
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
			} catch (error) {
				console.log(error);
				setValid(false);
			}
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
		onClear();

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
		onClear();

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
		"box-content flex aspect-video flex-col items-center justify-center gap-lg border-[3px] p-lg transition-colors",
		{
			"border-dashed": !isDropTarget && !url,
			"bg-brand-500": isDropTarget,
			"border-ok-500 bg-ok-500/25": isValid,
			"border-error-600 bg-error-600/25": isValid === false
		}
	);

	return (
		<>
			<DropZone data-nofocus aria-label="Drop SVG file for verification" onDrop={onDrop} getDropOperation={(types) => types.has("image/svg+xml") ? "move" : "cancel"} className={className}>
				<FileTrigger onSelect={onSelect} acceptedFileTypes={["image/svg+xml"]}>
					{url && file ? (
						<Button className="size-full h-auto center">
							<span className="sr-only">Select SVG</span>
							<img className="animate-fade-in" src={url} alt={`SVG file with id '${file.name.replace(".svg", "")}'.`} />
						</Button>
					) : (
						<>
							<p>Drag and drop SVG here</p>
							<Button data-btn="primary" className="w-auto">
								Select SVG
								<Icon icon="image-plus" />
							</Button>
						</>
					)}
				</FileTrigger>
			</DropZone>

			{file ? (
				<ul className="mt-lg flex flex-wrap-reverse gap-lg">
					<li className="grow basis-[calc(50%-theme('gap.lg'))]">
						<button className="whitespace-nowrap" data-btn={isValid !== null ? "primary": "secondary"} disabled={!file} onClick={onClear}>
							Remove
							<Icon icon="trash-2" />
						</button>
					</li>
					{isValid === null ? (
						<li className="grow basis-[calc(50%-theme('gap.lg'))]">
							<button className="whitespace-nowrap" data-btn="primary" disabled={!file} onClick={onVerify}>
								Verify
								<Icon icon="badge-check" />
							</button>
						</li>
					) : null}
				</ul>
			) : null}

			{isValid ? (
				<p className="mt-lg border-[3px] border-ok-500 bg-ok-500/25 px-lg py-[1.6875rem] leading-none">
					Valid!
				</p>
			) : null}
		</>
	);
};
