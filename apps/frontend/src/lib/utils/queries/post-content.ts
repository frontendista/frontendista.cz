import { z } from "zod";
import { SANITY_URL_SCHEMA } from "$utils/schema";

export const SCHEMA_POST_CONTENT = z
	.object({
		_id: z.string(),
		_updatedAt: z.string(),
		title: z.string(),
		author: z.object({
			name: z.string(),
			avatar: z.object({
				url: SANITY_URL_SCHEMA
			}),
			slug: z.string()
		}),
		publishedAt: z.string(),
		thumbnail: z.object({
			url: SANITY_URL_SCHEMA,
			lqip: z.string(),
			height: z.number(),
			width: z.number(),
			aspectRatio: z.number()
		}),
		body: z.array(z.any()),
		categories: z.array(
			z.object({
				title: z.string(),
				color: z.string()
			})
		),
		description: z.string()
	})
	.strict();

export const GROQ_POST_CONTENT = `*[_type == "post" && slug.current == $slug] {
	_id,
	_updatedAt,
	title,
	author-> {
		name,
		"avatar": 
		avatar.asset-> {
			url
		},
		"slug": slug.current
	},
	publishedAt,
	"thumbnail": thumbnail.asset-> {
		url,
		"lqip": metadata.lqip,
		"height": metadata.dimensions.height,
		"width": metadata.dimensions.width,
		"aspectRatio": metadata.dimensions.aspectRatio
	},
    body[] {
		...,
		asset != null => {
			"asset": asset-> {
				url,
				"lqip": metadata.lqip,
				"height": metadata.dimensions.height,
				"width": metadata.dimensions.width
			}
		}
	},
	"categories": categories[]->{
		title,
		color
	} | order(title),
	description
}[0]`;

export type BlogPostContent = z.infer<typeof SCHEMA_POST_CONTENT>;
