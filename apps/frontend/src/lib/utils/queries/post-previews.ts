import { SANITY_URL_SCHEMA } from "$utils/schema";
import { z } from "zod";

export const SCHEMA_POST_PREVIEWS = z.array(
	z
		.object({
			_id: z.string(),
			_updatedAt: z.string(),
			title: z.string(),
			author: z.object({
				name: z.string(),
				avatar: z.object({
					url: SANITY_URL_SCHEMA
				})
			}),
			publishedAt: z.string(),
			thumbnail: z.object({
				url: SANITY_URL_SCHEMA,
				lqip: z.string(),
				height: z.number(),
				width: z.number()
			}),
			slug: z.string()
		})
		.strict()
);

export const GROQ_POST_PREVIEWS = `*[_type == "post" && !(_id in path('drafts.**'))] | order(publishedAt desc) {
	_id,
	_updatedAt,
	title,
	author-> {
		name,
		"avatar": 
		avatar.asset-> {
			url
		}
	},
	publishedAt,
	"thumbnail": thumbnail.asset-> {
		url,
		"lqip": metadata.lqip,
		"height": metadata.dimensions.height,
		"width": metadata.dimensions.width
	},
	"slug": slug.current
}`;

export type BlogPostPreviews = z.infer<typeof SCHEMA_POST_PREVIEWS>;
export type BlogPostPreview = BlogPostPreviews[0];
