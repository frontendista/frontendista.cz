import type { IContactBodySchema } from "./validation-schemes";

export function createContactMessageBody({ message, name, email }: IContactBodySchema) {
	return {
		content: "Test"
	};
}
