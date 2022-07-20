import { router } from "./router";
import { handleCors } from "./utils/handle-cors";

export type NODE_ENV = "dev" | "staging" | "production";
export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	FRONTENDISTA_STORAGE: KVNamespace;

	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;

	ENVIRONMENT: NODE_ENV;
	DISCORD_WEBHOOK_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return router
			.handle(request, env, ctx)
			.then(response => handleCors(request, response, env.ENVIRONMENT))
			.catch(
				_ =>
					new Response("Something failed :(", {
						status: 500
					})
			);
	}
};
