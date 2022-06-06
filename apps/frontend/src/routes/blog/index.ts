import { dev } from "$app/env";
import { sanityClient } from "$utils/sanity-client";

import {
	GROQ_POST_PREVIEWS,
	SCHEMA_POST_PREVIEW,
	type BlogPostPreview
} from "$utils/queries/post-previews";

import type { RequestHandler } from ".svelte-kit/types/src/routes/blog/__types/index";

export const get: RequestHandler = async () => {
	try {
		const posts = await sanityClient.fetch<BlogPostPreview[]>(GROQ_POST_PREVIEWS);

		await Promise.all(posts.map((post) => SCHEMA_POST_PREVIEW.parseAsync(post)));

		return {
			body: {
				posts
			}
		};
	} catch (error) {
		console.error(error);

		if (!dev) {
			process.exit(1);
		}

		return {
			body: {
				posts: []
			}
		};
	}
};
