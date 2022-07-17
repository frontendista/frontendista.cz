import { dev } from "$app/env";
import {
	GROQ_POST_CONTENT,
	SCHEMA_POST_CONTENT,
	type BlogPostContent
} from "$utils/queries/post-content";
import { sanityClient } from "$utils/sanity-client";
import type { RequestHandler } from ".svelte-kit/types/src/routes/blog/__types/[slug]";
import { ZodError } from "zod";

type ReturnValue = { post: BlogPostContent | null };

export const GET: RequestHandler<ReturnValue> = async ({ params }) => {
	try {
		const result = await sanityClient.fetch<BlogPostContent>(GROQ_POST_CONTENT, {
			slug: params.slug
		});
		const post = await SCHEMA_POST_CONTENT.parseAsync(result);

		return {
			body: {
				post
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
				post: null
			}
		};
	}
};
