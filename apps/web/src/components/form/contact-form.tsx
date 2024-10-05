import * as Form from "@radix-ui/react-form";
import { ContactFormValidation, Schemas } from "@frontendista/validation";
import { clsx } from "clsx";

import * as Popover from "./radix/popover";
import * as Dialog from "./radix/dialog";

import { TextTooltip } from "./radix/tooltip";
import { withClass } from "./hoc";
import { Textarea } from "./textarea";
import { Icon } from "../common/icon";

import { delayPromise } from "~/utils/promise";
import { toast } from "~/stores/toast";

import { useState, type JSX, type FunctionComponent, type ComponentProps, useMemo, useRef, useEffect } from "preact/compat";

const Field = withClass(Form.Field, "focus-within:z-50");

import "~/utils/global";

export const FieldHeader: FunctionComponent<JSX.HTMLAttributes> = ({ children, className, ...props }) => {
	return (
		<div className={clsx("mb-md flex flex-wrap justify-between gap-md font-medium", className)} {...props}>
			{children}
		</div>
	);
};

export const MessageWithIcon: FunctionComponent<ComponentProps<typeof Form.Message>> = ({ children, ...props }) => {
	return (
		<Form.Message className={clsx("flex items-center gap-md text-error-600")} {...props}>
			{children}
			<Icon icon="octagon-alert" strokeWidth={2.5} title="Error" className="h-text" />
		</Form.Message>
	);
};

type Fields = keyof Schemas.MessageBody;
type ServerErrors = Partial<Record<Fields, string[]>> | null;

interface ImageData {
	name: string;
	src: string;
}

export const ContactForm: FunctionComponent = () => {
	const [isLoading, setLoading] = useState(false);
	const [serverErrors, setServerErrors] = useState<ServerErrors>(null);
	const [image, setImage] = useState<ImageData | null>(null);
	const [hasDownloaded, setHasDownloaded] = useState(false);
	const [redirect, setRedirect] = useState(false);

	const form = useRef<HTMLFormElement | null>(null);
	const download = useRef<HTMLAnchorElement | null>(null);

	useEffect(() => {
		if (!image && redirect) {
			setTimeout(() => {
				window.location.href = "/verify";
			}, 250);

			setRedirect(false);
		}
	}, [redirect, image]);

	const serverInvalid = useMemo<Record<Fields, string | false>>(() => ({
		email: serverErrors?.email?.[0] || false,
		firstname: serverErrors?.firstname?.[0] || false,
		lastname: serverErrors?.lastname?.[0] || false,
		message: serverErrors?.message?.[0] || false,
	}), [serverErrors]);

	const clearServerError = (field: Fields) => {
		setServerErrors(prev => {
			if (!prev) return null;

			return {
				...prev,
				[field]: undefined
			};
		});
	};
	
	const onDialogClose = () => {
		if (form.current) {
			form.current.reset();
			form.current.querySelectorAll("textarea").forEach(textarea => {
				textarea.dispatchEvent(new Event("input"));
			});
		}

		setImage(null);
		setHasDownloaded(false);
	};

	const handleSubmit: JSX.SubmitEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		setLoading(true);

		const formData = new FormData(event.currentTarget);
		const data: Record<string, unknown> = {};

		for (const [key, value] of formData) {
			if (value) {
				data[key] = value;
			}
		}

		try {
			const promise = fetch(new URL("/message", import.meta.env.PUBLIC_API_URL), {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			});

			const response = await delayPromise(promise, 2000);

			if (response.status === 400) {
				const errors = await response.json();

				setServerErrors(errors);

				throw new Error("Server received invalid or malformed data.");
			}

			if (response.status === 503) {
				throw new Error("Service is currently unavailable. Please try again in a bit.");
			}

			if (!response.ok) {
				throw new Error("Something went wrong.");
			}

			const contentDisposition = response.headers.get("Content-Disposition");

			const blob = await response.blob();
			const image = URL.createObjectURL(blob);

			setImage({
				name: contentDisposition?.split("filename=")[1] ?? "message.svg",
				src: image,
			});
		} catch (error) {
			if (error instanceof Error) {
				return toast({ type: "error", content: error.message });
			}

			toast({ type: "error", content: "Something went wrong. Please try again later. fsdfdsa fsdfasd fas fs" });
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form.Root
			className="mx-auto mt-xl flex flex-col gap-lg lg:mt-0 lg:max-w-form"
			onSubmit={handleSubmit}
			onClearServerErrors={() => setServerErrors(null)}
			ref={form}
		>
			<Field name="email">
				<FieldHeader>
					<Form.Label>Email</Form.Label>
					<MessageWithIcon match="typeMismatch">Please provide a valid email</MessageWithIcon>
					<MessageWithIcon match="tooLong">Email too long</MessageWithIcon>
				</FieldHeader>

				<Form.Control asChild onChange={() => clearServerError("email")}>
					<input
						placeholder="walter@white.com"
						data-input
						type="email"
						maxLength={100}
						disabled={isLoading}
					/>
				</Form.Control>
			</Field>

			<div className="flex flex-col gap-lg sm:flex-row">
				<Field name="firstname" className="grow basis-[calc(50%-theme('gap.lg'))]">
					<FieldHeader>
						<Form.Label>First name</Form.Label>
						<MessageWithIcon match="tooShort">First name too short</MessageWithIcon>
						<MessageWithIcon match="tooLong">First name too long</MessageWithIcon>
					</FieldHeader>

					<Form.Control asChild onChange={() => clearServerError("firstname")}>
						<input
							placeholder="Walter"
							data-input
							minLength={ContactFormValidation.FIRSTNAME_MIN_LENGTH}
							maxLength={ContactFormValidation.FIRSTNAME_MAX_LENGTH}
							disabled={isLoading}
						/>
					</Form.Control>
				</Field>

				<Field name="lastname" className="grow basis-[calc(50%-theme('gap.lg'))]">
					<FieldHeader>
						<Form.Label>Last name</Form.Label>
						<MessageWithIcon match="tooShort">Last name too short</MessageWithIcon>
						<MessageWithIcon match="tooLong">Last name too long</MessageWithIcon>
					</FieldHeader>

					<Form.Control asChild onChange={() => clearServerError("lastname")}>
						<input
							placeholder="White"
							data-input
							minLength={ContactFormValidation.LASTNAME_MIN_LENGTH}
							maxLength={ContactFormValidation.LASTNAME_MAX_LENGTH}
							disabled={isLoading}
						/>
					</Form.Control>
				</Field>
			</div>

			<Field name="message" serverInvalid={!!serverInvalid.message}>
				<FieldHeader>
					<Form.Label className="input-required">Message</Form.Label>
					<MessageWithIcon match="valueMissing">Message required</MessageWithIcon>
					<MessageWithIcon match="tooShort">Message too short</MessageWithIcon>
					<MessageWithIcon match="tooLong">Message too long</MessageWithIcon>
					{serverInvalid.message ? <MessageWithIcon forceMatch>{serverInvalid.message}</MessageWithIcon> : null}
				</FieldHeader>

				<Form.Control asChild onChange={() => clearServerError("message")}>
					<Textarea
						placeholder="..."
						data-input
						required
						minLength={ContactFormValidation.MESSAGE_MIN_LENGTH}
						maxLength={ContactFormValidation.MESSAGE_MAX_LENGTH}
						topText="Hello,"
						bottomText="Bye 👋"
						disabled={isLoading}
					/>
				</Form.Control>
			</Field>

			<Form.Submit asChild>
				<div className="flex gap-lg">
					<Popover.Root modal>
						<Popover.Trigger asChild>
							<button type="button" data-btn="primary" data-size="square" disabled={isLoading}>
								<span className="sr-only">Open card preview</span>
								<Icon icon="sliders-horizontal" strokeWidth={3} title="Card preview" />
							</button>
						</Popover.Trigger>

						<Popover.Portal>
							<Popover.Content sideOffset={16} side="top">
								TBD
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>

					<button type="submit" data-btn="primary" disabled={isLoading}>
						{isLoading ? (
							<>
								<span className="sr-only">Loading</span>
								<Icon icon="ring-spinner" title="Loading" />
							</>
						) : (
							<>
								Submit
								<Icon icon="send-horizontal" strokeWidth={3} title="Send it 🚀" />
							</>
						)}
					</button>
				</div>
			</Form.Submit>

			<p className="text-center text-sm font-thin">By clicking the "<b>SUBMIT</b>" button you agree to our <a href="/privacy" className="text-sm" data-link="text">privacy policy</a>.</p>

			<Dialog.Root open={!!image} onOpenChange={onDialogClose}>
				<Dialog.Portal>
					<Dialog.Overlay className="animate-fade-in">
						<Dialog.Content className="animate-fade-in bg-primary lg:h-fit lg:bg-secondary">
							<div className="flex flex-col justify-center gap-lg">
								<Dialog.Close asChild>
									<button type="button" className="ml-auto block p-md">
										<span className="sr-only">Close</span>
										<Icon icon="octagon-x" className="size-2lg" />
									</button>
								</Dialog.Close>

								<Dialog.Title>Message was sent!</Dialog.Title>

								<Dialog.Description className="-mt-md flex flex-col" asChild>
									<ol data-list="ol">
										<li>Below is a card uniquely identifying your message!</li>
										<li>It's <span className="text-ok-800 night:text-ok-500">digitally signed</span> so you can prove it was generated by this website!</li>
										<li>Click the image below to download it to your device.</li>
										<li>Click the "VERIFY" button to validate your image!</li>
									</ol>
								</Dialog.Description>

								{image ? (
									<a href={image.src} download={image.name} className="center" rel="noopener" target="_blank" ref={download} onClick={() => setHasDownloaded(true)}>
										<img src={image.src} alt="Generated image" className="w-full" />
									</a>
								) : null}

								<TextTooltip text="Please download the image first." show={!hasDownloaded}>
									<Dialog.Close asChild>
										<button type="button" data-btn="primary" disabled={!hasDownloaded} onClick={() => setRedirect(true)}>
											Verify
											<Icon icon="badge-check" />
										</button>
									</Dialog.Close>
								</TextTooltip>
							</div>
						</Dialog.Content>
					</Dialog.Overlay>
				</Dialog.Portal>
			</Dialog.Root>
		</Form.Root>
	);
};
