import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		type: z.string(),
		source: z.string().optional(),
		year: z.number(),
		cta: z.object({
			text: z.string(),
			href: z.string(),
		}).optional(),
		cover: z.object({
			image: image(),
			alt: z.string(),
		}).optional()
	})
});

const ossCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		url: z.object({
			github: z.string().optional(),
			npm: z.string().optional(),
		}).optional()
	})
});

export const collections = {
	projects: projectCollection,
	oss: ossCollection
};
