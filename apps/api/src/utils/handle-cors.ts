import type { NODE_ENV } from "..";

const ALLOWED_ORIGINS = ["https://frontendista.cz", "https://staging.frontendista.cz"];

export function handleCors(request: Request, response: Response, env: NODE_ENV): Response {
	if (env === "dev") {
		response.headers.set("Access-Control-Allow-Origin", "*");
		return response;
	}

	const origin = request.headers.get("Origin");

	if (origin && ALLOWED_ORIGINS.includes(origin)) {
		response.headers.append("Access-Control-Allow-Origin", origin);
		response.headers.append("Vary", "Origin");
	}

	return response;
}
