import { email, type InferOutput, maxLength, minLength, object, optional, pipe, string, trim } from "valibot"

import { ContactFormValidation } from ".."

export const MESSAGE_BODY = object({
	message: pipe(
		string("Server: Message is required"),
		trim(),
		minLength(ContactFormValidation.MESSAGE_MIN_LENGTH, `Server: Message must be at least ${ContactFormValidation.MESSAGE_MIN_LENGTH} characters long`),
		maxLength(ContactFormValidation.MESSAGE_MAX_LENGTH, `Server: Message must be at most ${ContactFormValidation.MESSAGE_MAX_LENGTH} characters long`)
	),
	firstname: optional(
		pipe(
			string("Server: First name is required"),
			trim(),
			minLength(ContactFormValidation.FIRSTNAME_MIN_LENGTH, `Server: First name must be at least ${ContactFormValidation.FIRSTNAME_MIN_LENGTH} characters long`),
			maxLength(ContactFormValidation.FIRSTNAME_MAX_LENGTH, `Server: First name must be at most ${ContactFormValidation.FIRSTNAME_MAX_LENGTH} characters long`)
		)
	),
	lastname: optional(
		pipe(
			string("Server: Last name is required"),
			trim(),
			minLength(ContactFormValidation.LASTNAME_MIN_LENGTH, `Server: Last name must be at least ${ContactFormValidation.LASTNAME_MIN_LENGTH} characters long`),
			maxLength(ContactFormValidation.LASTNAME_MAX_LENGTH, `Server: Last name must be at most ${ContactFormValidation.LASTNAME_MAX_LENGTH} characters long`)
		)
	),
	email: optional(
		pipe(
			string("Server: Email is required"),
			trim(),
			email("Server: Email is invalid")
		)
	)
})

export type MessageBody = InferOutput<typeof MESSAGE_BODY>
