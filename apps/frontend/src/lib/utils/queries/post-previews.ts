import { z } from "zod";

export const SCHEMA_POST_PREVIEW = z.object({
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
});

export const GROQ_POST_PREVIEWS = `*[_type == "post"] | order(publishedAt desc) {
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

export type BlogPostPreview = z.infer<typeof SCHEMA_POST_PREVIEW>;
