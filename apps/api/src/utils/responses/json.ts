export function json(body: any, options: ResponseInit = {}): Response {
	const { headers, ...rest } = options;

	return new Response(JSON.stringify(body), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			...headers
		},
		...rest
	});
}
