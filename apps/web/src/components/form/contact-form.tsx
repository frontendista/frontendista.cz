import { ContactFormValidation } from "@frontendista/validation";
import * as Form from "@radix-ui/react-form";
import { clsx } from "clsx";

import * as Popover from "./radix/popover";

import { withClass } from "./hoc";
import { Textarea } from "./textarea";
import { Icon } from "../common/icon";

import { useState, type JSX, type FunctionComponent, type ComponentProps } from "preact/compat";

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
			<Icon icon="octagon-alert" strokeWidth={2.5} title="Error" className="h-text" />
			{children}
		</Form.Message>
	);
};

export const ContactForm: FunctionComponent = () => {
	const [isLoading, setLoading] = useState(false);

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

		console.log(data);

		await new Promise((resolve) => setTimeout(resolve, 2000));

		setLoading(false);
	};

	return (
		<Form.Root className="mx-auto mt-xl flex flex-col gap-lg lg:mt-0 lg:max-w-[50rem]" onSubmit={handleSubmit}>
			<Field name="email">
				<FieldHeader>
					<Form.Label>Email</Form.Label>
					<MessageWithIcon match="typeMismatch">Please provide a valid email</MessageWithIcon>
					<MessageWithIcon match="tooLong">Email too long</MessageWithIcon>
				</FieldHeader>

				<Form.Control asChild>
					<input data-input type="email" maxLength={100} disabled={isLoading} />
				</Form.Control>
			</Field>

			<div class="flex flex-col gap-xl sm:flex-row">
				<Field name="firstname" class="grow">
					<FieldHeader>
						<Form.Label>First name</Form.Label>
						<MessageWithIcon match="tooShort">First name too short</MessageWithIcon>
						<MessageWithIcon match="tooLong">First name too long</MessageWithIcon>
					</FieldHeader>

					<Form.Control asChild>
						<input data-input minLength={2} maxLength={50} disabled={isLoading} />
					</Form.Control>
				</Field>

				<Field name="lastname" class="grow">
					<FieldHeader>
						<Form.Label>Last name</Form.Label>
						<MessageWithIcon match="tooShort">Last name too short</MessageWithIcon>
						<MessageWithIcon match="tooLong">Last name too long</MessageWithIcon>
					</FieldHeader>

					<Form.Control asChild>
						<input data-input minLength={2} maxLength={50} disabled={isLoading} />
					</Form.Control>
				</Field>
			</div>

			<Field name="message">
				<FieldHeader>
					<Form.Label className="input-required">Message</Form.Label>
					<MessageWithIcon match="valueMissing">Message required</MessageWithIcon>
					<MessageWithIcon match="tooShort">Message too short</MessageWithIcon>
					<MessageWithIcon match="tooLong">Message too long</MessageWithIcon>
				</FieldHeader>

				<Form.Control asChild>
					<Textarea placeholder="..." data-input required minLength={ContactFormValidation.MESSAGE_MIN_LENGTH} maxLength={ContactFormValidation.MESSAGE_MAX_LENGTH} topText="Hello," bottomText="Bye 👋" disabled={isLoading} />
				</Form.Control>
			</Field>

			<Form.Submit asChild>
				<div className="flex gap-lg">

					<Popover.Root modal>
						<Popover.Trigger asChild>
							<button type="button" data-btn="primary" data-size="square" disabled={isLoading}>
								<span className="sr-only">Open advanced settings</span>
								<Icon icon="sliders-vertical" strokeWidth={3} title="Advanced settings" />
							</button>
						</Popover.Trigger>

						<Popover.Portal>
							<Popover.Content sideOffset={16} side="top">TBD</Popover.Content>
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

			<p className="text-center text-sm font-thin">By clicking the "<b>SUBMIT</b>" button you agree to our <a href="#privacy" class="text-sm" data-link="text">privacy policy</a>.</p>
		</Form.Root>
	);
};
