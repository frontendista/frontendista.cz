import type { APIContext, APIRoute } from "astro";

export const asyncHandler = (fn: APIRoute) => {
	return async function (context: APIContext) {
		try {
			return await fn(context);
		} catch (error) {
			console.error('Error occurred:', error);

			return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}
	};
};
