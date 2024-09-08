import { ContactFormValidation } from "@frontendista/validation"
import { maxLength, minLength, object, pipe, string } from "valibot"

export const MESSAGE_BODY = object({
	message: pipe(
		string("Server: Message is required"),
		minLength(ContactFormValidation.MESSAGE_MIN_LENGTH, `Server: Message must be at least ${ContactFormValidation.MESSAGE_MIN_LENGTH} characters long`),
		maxLength(ContactFormValidation.MESSAGE_MAX_LENGTH, `Server: Message must be at most ${ContactFormValidation.MESSAGE_MAX_LENGTH} characters long`)
	)
})
