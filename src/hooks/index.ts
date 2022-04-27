import { minify } from "html-minifier-terser";

import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPage: async ({ html }) => {
			return await minify(html, {
				collapseWhitespace: true,
				removeComments: true,
				minifyJS: true,
				minifyCSS: true
			});
		}
	});

	return response;
};
