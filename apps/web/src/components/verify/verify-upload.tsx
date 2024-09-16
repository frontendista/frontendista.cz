import { useState } from "preact/hooks";
import { DropZone, Button, FileTrigger } from "react-aria-components";
import clsx from "clsx";
import { base64ToUint8Array } from "@frontendista/validation/utils";

import { Icon } from "../common/icon"; 

import type { FunctionComponent, ComponentProps } from "preact";

async function createObjectURL(file: File) {
	const buffer = await file.arrayBuffer();
	const blob = new Blob([buffer], { type: "image/svg+xml" });
	return URL.createObjectURL(blob);
}

type DropzoneProps = ComponentProps<typeof DropZone>
type FileTriggerProps = ComponentProps<typeof FileTrigger>

const PUBLIC_KEY = base64ToUint8Array("MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEgFcPEW0BhrmqHm+4P4UIPGa7cXCniPP2GCr6ZYWEeimkJwwsZir6fXAEv4hTDnfYtM1NzAYDX8uheQO8Z+bXZQ==");

// TODO: Error handling

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
		"gap-lg p-lg box-content flex aspect-video flex-col justify-center border-[3px] transition-colors",
		{
			"border-dashed bg-brand-500/5": !isDropTarget && !url,
			"bg-brand-500/25": isDropTarget,
			"border-ok-500 bg-ok-500/25": isValid,
			"border-error-600 bg-error-600/25": isValid === false
		}
	);

	return (
		<>
			<DropZone data-nofocus aria-label="Drop SVG file for verification" onDrop={onDrop} getDropOperation={(types) => types.has("image/svg+xml") ? "move" : "cancel"} className={className}>
				<FileTrigger onSelect={onSelect} acceptedFileTypes={["image/svg+xml"]}>
					{url && file ? (
						<Button className="center size-full h-auto">
							<span className="sr-only">Select SVG</span>
							<img className="animate-fade-in" src={url} alt={`SVG file with id '${file.name.replace(".svg", "")}'.`} />
						</Button>
					) : (
						<div className="gap-lg mx-auto flex max-w-fit flex-col items-center">
							<Icon icon="image-plus" className="max-w-8" strokeWidth="2" />
							<p className="leading-none">Drag and drop SVG here</p>
							<span className="text-secondary lines leading-none">or</span>
							<Button data-btn="primary" className="w-auto">
								Select SVG
							</Button>
						</div>
					)}
				</FileTrigger>
			</DropZone>

			{file ? (
				<ul className="mt-lg gap-lg flex flex-wrap-reverse">
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

			{isValid !== null ? (
				<p className={clsx(
					"mt-lg px-lg border-[3px] py-[1.6875rem] text-center font-bold uppercase",
					{
						"bg-ok-500/25 text-ok-300 border-ok-500": isValid,
						"bg-error-600/25 text-error-300 border-error-600": !isValid
					}
				)}>
					{isValid ? "This file was generated by frontendista.cz" : "This file wasn't generated by frontendista.cz"}
				</p>
			) : null}
		</>
	);
};
