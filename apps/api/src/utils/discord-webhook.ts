import type { IContactBodySchema } from "./validation-schemes";

export function createContactMessageBody({ message, name, email }: IContactBodySchema) {
	const embed = {
		timestamp: new Date(),
		author: {
			name
		},
		fields: [
			{
				name: "Message",
				value: message,
				inline: false
			}
		]
	};

	if (email) {
		embed.fields.push({
			name: "Email",
			value: email,
			inline: true
		});
	}

	return {
		embeds: [embed]
	};
}
