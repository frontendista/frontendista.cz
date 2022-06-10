import { z } from "zod";

export const SCHEMA_POST_CONTENT = z
	.object({
		_id: z.string(),
		_updatedAt: z.string(),
		title: z.string(),
		author: z.object({
			name: z.string(),
			avatar: z.object({
				assetId: z.string()
			})
		}),
		publishedAt: z.string(),
		thumbnail: z.object({
			assetId: z.string(),
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
			assetId
		}
	},
	publishedAt,
	"thumbnail": thumbnail.asset-> {
		assetId,
		"lqip": metadata.lqip,
		"height": metadata.dimensions.height,
		"width": metadata.dimensions.width,
		"aspectRatio": metadata.dimensions.aspectRatio
	},
    body,
	"categories": categories[]->{
		title,
		color
	} | order(title),
	description
}[0]`;

export type BlogPostContent = z.infer<typeof SCHEMA_POST_CONTENT>;
