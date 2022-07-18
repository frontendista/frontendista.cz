export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	FRONTENDISTA_STORAGE: KVNamespace;

	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;

	ENVIRONMENT: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const { FRONTENDISTA_STORAGE, ENVIRONMENT } = env;

		const value = await FRONTENDISTA_STORAGE.get("contact_form_messages_count");

		return new Response(
			JSON.stringify({
				env: ENVIRONMENT,
				count: value
			}),
			{
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
	}
};
