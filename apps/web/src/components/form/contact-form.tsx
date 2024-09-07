import * as Form from "@radix-ui/react-form";
import { clsx } from "clsx";

import { withClass } from "./hoc";

import type { JSX, FunctionComponent } from "preact/compat";

const Message = withClass(Form.Message, "text-red-500");
const Field = withClass(Form.Field, "focus-within:z-50");

export const FieldHeader: FunctionComponent<JSX.HTMLAttributes> = ({ children, className, ...props }) => {
	return (
		<div className={clsx("mb-md flex justify-between font-bold", className)} {...props}>
			{children}
		</div>
	);
};

export const ContactForm = () => {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<Form.Root className="mx-auto flex max-w-[50rem] flex-col gap-lg" onSubmit={handleSubmit}>
			<Field name="email">
				<FieldHeader>
					<Form.Label>Email</Form.Label>
					<Message match="valueMissing">Please enter your email</Message>
					<Message match="typeMismatch">Please provide a valid email</Message>
				</FieldHeader>

				<Form.Control asChild>
					<input data-input type="email" required />
				</Form.Control>
			</Field>

			<div class="flex flex-col gap-xl sm:flex-row">
				<Field class="grow" name="firstname">
					<FieldHeader>
						<Form.Label>First name</Form.Label>
						<Message match="valueMissing">First name required</Message>
					</FieldHeader>

					<Form.Control asChild>
						<input data-input required />
					</Form.Control>
				</Field>

				<Field class="grow" name="lastname">
					<FieldHeader>
						<Form.Label>Last name</Form.Label>
						<Message match="valueMissing">Last name required</Message>
					</FieldHeader>

					<Form.Control asChild>
						<input data-input required />
					</Form.Control>
				</Field>
			</div>

			<Field name="message">
				<FieldHeader>
					<Form.Label>Message</Form.Label>
					<Message match="valueMissing">Message required</Message>
				</FieldHeader>

				<Form.Control asChild>
					<textarea data-input required />
				</Form.Control>
			</Field>

			<Form.Submit asChild>
				<button data-btn="primary">Submit</button>
			</Form.Submit>
			<p className="text-center text-sm font-thin">By clicking the "Submit" button you agree to our <a href="#privacy" class="text-sm" data-link="text">privacy policy</a>.</p>
		</Form.Root>
	);
};
