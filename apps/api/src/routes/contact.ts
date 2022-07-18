import { Router } from "itty-router";

import { createContactMessageBody } from "../utils/discord-webhook";
import { DiscordWebhookError } from "../error/discord-webhook-error";

import type { Env } from "..";

export const contactRouter = Router({
	base: "/contact"
});

// type ISendRequestBody = {
// 	name?: string;
// 	email?: string;
// 	message?: string;
// } | null;

contactRouter.post("/send", async (request, { DISCORD_WEBHOOK_URL }: Env) => {
	// const body: ISendRequestBody = request.json ? await request.json() : null;

	try {
		const response = await fetch(DISCORD_WEBHOOK_URL, {
			method: "POST",
			body: JSON.stringify(createContactMessageBody()),
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
