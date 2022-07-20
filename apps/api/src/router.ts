import { Router } from "itty-router";

import { handleContact } from "./routes/contact";
import { handlePreflight } from "./utils/handle-preflight";

export const router = Router();

router
	.options("*", handlePreflight)
	.all("/contact/*", handleContact)
	.all(
		"*",
		() =>
			new Response("💣", {
				status: 404,
				statusText: "Not found"
			})
	);
