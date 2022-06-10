import { dev } from "$app/env";
import {
	GROQ_POST_PREVIEWS,
	SCHEMA_POST_PREVIEWS,
	type BlogPostPreviews
} from "$utils/queries/post-previews";
import { sanityClient } from "$utils/sanity-client";
import type { RequestHandler } from ".svelte-kit/types/src/routes/blog/__types/index";
import { ZodError } from "zod";

export const get: RequestHandler = async () => {
	try {
		const response = await sanityClient.fetch<BlogPostPreviews>(GROQ_POST_PREVIEWS);
		const posts = await SCHEMA_POST_PREVIEWS.parseAsync(response);

		return {
			body: {
				posts
			}
		};
	} catch (error) {
		if (error instanceof ZodError) {
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
