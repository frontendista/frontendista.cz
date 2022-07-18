import { object, string, optional, size } from "superstruct";

export const CONTACT_BODY_SCHEMA = object({
	name: optional(size(string(), 2, 50)),
	email: optional(size(string(), 2, 50)),
	message: size(string(), 10, 255)
});

export type IContactBodySchema = typeof CONTACT_BODY_SCHEMA.TYPE;
