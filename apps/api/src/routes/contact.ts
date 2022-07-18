import { Router } from "itty-router";
import { assert, StructError } from "superstruct";

import { createContactMessageBody } from "../utils/discord-webhook";
import { CONTACT_BODY_SCHEMA } from "../utils/validation-schemes";
import { DiscordWebhookError } from "../error/discord-webhook-error";

import type { Env } from "..";

export const contactRouter = Router({
	base: "/contact"
});

contactRouter.post("/send", async (request, { DISCORD_WEBHOOK_URL }: Env) => {
	let body: any;

	try {
		body = request.json ? await request.json() : null;
	} catch {
		return new Response("Malformed request", {
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
			return new Response(null, {
				status: 201
			});
		}

		throw new DiscordWebhookError(response);
	} catch (e) {
		if (e instanceof StructError) {
			return new Response("Malformed request", {
				status: 400
			});
		}

		if (e instanceof DiscordWebhookError) {
			return new Response(e.message, {
				status: 503,
				statusText: e.message
			});
		}

		return new Response(null, {
			status: 500,
			statusText: "💣"
		});
	}
});
