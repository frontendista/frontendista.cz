import { Router } from "itty-router";

import { contactRouter } from "./routes/contact";

export const router = Router();

router
	.options("*", () => {
		return new Response(null, {
			headers: {
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Origin, Vary"
			}
		});
	})
	.all("/contact/*", contactRouter.handle)
	.all(
		"*",
		() =>
			new Response("💣", {
				status: 404,
				statusText: "Not found"
			})
	);
