import * as Form from "@radix-ui/react-form";
import { clsx } from "clsx";

import { withClass } from "./hoc";
import { Textarea } from "./textarea";

import { type JSX, type FunctionComponent, useState } from "preact/compat";

const Message = withClass(Form.Message, "text-error-600");
const Field = withClass(Form.Field, "focus-within:z-50");

export const FieldHeader: FunctionComponent<JSX.HTMLAttributes> = ({ children, className, ...props }) => {
	return (
		<div className={clsx("mb-md flex flex-wrap justify-between gap-md font-medium", className)} {...props}>
			{children}
		</div>
	);
};

// TODO: Autocomplete (?)

export const ContactForm = () => {
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
		<Form.Root className="mx-auto flex flex-col gap-lg lg:max-w-[50rem]" onSubmit={handleSubmit}>
			<Field name="email">
				<FieldHeader>
					<Form.Label>Email</Form.Label>
					<Message match="typeMismatch">Please provide a valid email</Message>
					<Message match="tooLong">Email too long</Message>
				</FieldHeader>

				<Form.Control asChild>
					<input data-input type="email" maxLength={100} />
				</Form.Control>
			</Field>

			<div class="flex flex-col gap-xl sm:flex-row">
				<Field name="firstname" class="grow">
					<FieldHeader>
						<Form.Label>First name</Form.Label>
						<Message match="tooShort">First name too short</Message>
						<Message match="tooLong">First name too long</Message>
					</FieldHeader>

					<Form.Control asChild>
						<input data-input minLength={2} maxLength={50} />
					</Form.Control>
				</Field>

				<Field name="lastname" class="grow">
					<FieldHeader>
						<Form.Label>Last name</Form.Label>
						<Message match="tooShort">Last name too short</Message>
						<Message match="tooLong">Last name too long</Message>
					</FieldHeader>

					<Form.Control asChild>
						<input data-input minLength={2} maxLength={50} />
					</Form.Control>
				</Field>
			</div>

			<Field name="message">
				<FieldHeader>
					<Form.Label className="input-required">Message</Form.Label>
					<Message match="valueMissing">Message required</Message>
					<Message match="tooShort">Message too short</Message>
					<Message match="tooLong">Message too long</Message>
				</FieldHeader>

				<Form.Control asChild>
					<Textarea placeholder="..." data-input required minLength={10} maxLength={250} topText="Hello," bottomText="Bye 👋" />
				</Form.Control>
			</Field>

			<Form.Submit asChild>
				<button data-btn="primary" disabled={isLoading}>{isLoading ? "..." : "Submit"}</button>
			</Form.Submit>

			<p className="text-center text-sm font-thin">By clicking the "SUBMIT" button you agree to our <a href="#privacy" class="text-sm" data-link="text">privacy policy</a>.</p>
		</Form.Root>
	);
};
