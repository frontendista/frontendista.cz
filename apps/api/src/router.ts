import { Router } from "itty-router";

import { contactRouter } from "./routes/contact";

export const router = Router();

router.all("/contact/*", contactRouter.handle).all("*", () => new Response("💣"));
