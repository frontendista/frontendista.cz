import { Router } from "itty-router";

export const contactRouter = Router({
	base: "/contact"
});

contactRouter.post("/send", () => {
	return new Response("OK");
});
