import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.string(),
		source: z.string().optional(),
		year: z.number(),
		cta: z.object({
			text: z.string(),
			href: z.string(),
		}).optional()
	})
});

export const collections = {
	projects: projectCollection,
};
