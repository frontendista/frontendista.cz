import { dev } from "$app/env";
import { sanityClient } from "$utils/sanity-client";
import { z } from "zod";

import {
	GROQ_POST_PREVIEWS,
	SCHEMA_POST_PREVIEWS,
	type BlogPostPreviews
} from "$utils/queries/post-previews";

import type { RequestHandler } from ".svelte-kit/types/src/routes/blog/__types/index";

export const get: RequestHandler = async () => {
	try {
		const posts = await sanityClient.fetch<BlogPostPreviews>(GROQ_POST_PREVIEWS);

		await SCHEMA_POST_PREVIEWS.parseAsync(posts);

		return {
			body: {
				posts
			}
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error(JSON.stringify(error.format(), undefined, 2));
		} else {
			console.error(error);
		}

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
