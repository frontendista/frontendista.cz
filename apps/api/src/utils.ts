import { flatten, ValiError } from "valibot";

import type { APIContext, APIRoute } from "astro";

export function json(content: any, status: number) {
	return new Response(JSON.stringify(content), {
		status,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export const asyncHandler = (fn: APIRoute) => {
	return async function (context: APIContext) {
		try {
			return await fn(context);
		} catch (error) {
			if (error instanceof ValiError) {
				const errors = flatten(error.issues)

				return json({ errors }, 400)
			}

			return json({ error: "Internal Server Error" }, 500);
		}
	};
};
