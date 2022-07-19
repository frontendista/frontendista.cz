import { defineField, defineType } from "sanity";

export const author = defineType({
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation(rule) {
				return rule
					.required()
					.error("Name is required")
					.min(2)
					.error("Name must be at least 2 characters")
					.max(50)
					.error("Name must be less than 50 characters");
			}
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name"
			}
		}),
		defineField({
			name: "avatar",
			title: "Avatar",
			type: "image",
			options: {
				hotspot: true
			},
			validation(rule) {
				return rule.required().error("Avatar is required");
			}
		})
	],
	preview: {
		select: {
			title: "name",
			media: "avatar"
		}
	}
});
