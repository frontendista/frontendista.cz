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
			})
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
	}
}`;

export type BlogPostPreviews = z.infer<typeof SCHEMA_POST_PREVIEWS>;
export type BlogPostPreview = BlogPostPreviews[0];
