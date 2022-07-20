export function handlePreflight(): Response {
	return new Response(null, {
		headers: {
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Origin, Vary"
		}
	});
}
