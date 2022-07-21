import { Router } from "itty-router";
import { assert, StructError } from "superstruct";

import { createContactMessageBody } from "../utils/discord-webhook";
import { CONTACT_BODY_SCHEMA } from "../utils/validation-schemes";
import { DiscordWebhookError } from "../error/discord-webhook-error";

import type { Env } from "..";

const contactRouter = Router({
	base: "/contact"
});

const CONTACT_MESSAGE_COUNT_KEY = "contact_form_messages_count";

contactRouter.post("/send", async (request, { DISCORD_WEBHOOK_URL, FRONTENDISTA_STORAGE }: Env) => {
	let body: any;

	try {
		body = request.json ? await request.json() : null;
	} catch {
		return new Response("Malformed request, refresh window and try again", {
			status: 400
		});
	}

	try {
		assert(body, CONTACT_BODY_SCHEMA);

		const response = await fetch(DISCORD_WEBHOOK_URL, {
			method: "POST",
			body: JSON.stringify(createContactMessageBody(body)),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (response.ok) {
			const count = Number(await FRONTENDISTA_STORAGE.get(CONTACT_MESSAGE_COUNT_KEY));

			if (!isNaN(count)) {
				await FRONTENDISTA_STORAGE.put(CONTACT_MESSAGE_COUNT_KEY, String(count + 1));
			}

			return new Response(null, {
				status: 201
			});
		}

		throw new DiscordWebhookError(response);
	} catch (e) {
		if (e instanceof StructError) {
			return new Response("Malformed request data, refresh window and try again", {
				status: 400
			});
		}

		if (e instanceof DiscordWebhookError) {
			return new Response("Discord couldn't send a message, try again later", {
				status: 503
			});
		}

		return new Response("Something went wrong, try again later", {
			status: 500
		});
	}
});

contactRouter.get("/count", async (_, { FRONTENDISTA_STORAGE }: Env) => {
	return new Response(await FRONTENDISTA_STORAGE.get(CONTACT_MESSAGE_COUNT_KEY), {
		status: 200,
		headers: {
			"Content-Type": "text/plain"
		}
	});
});

export const handleContact = contactRouter.handle;
