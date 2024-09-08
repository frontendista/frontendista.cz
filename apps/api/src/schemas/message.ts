import { object, string } from "valibot"

export const MESSAGE_BODY = object({
	message: string("Server: Message is required")
})
