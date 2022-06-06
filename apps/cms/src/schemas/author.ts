export default {
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => [
				Rule.required().error("Name is required"),
				Rule.min(2).error("Name must be at least 2 characters"),
				Rule.max(50).error("Name must be less than 50 characters")
			]
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name"
			}
		},
		{
			name: "avatar",
			title: "Avatar",
			type: "image",
			options: {
				hotspot: true
			},
			validation: (Rule) => Rule.required().error("Avatar is required")
		}
	],
	preview: {
		select: {
			title: "name",
			media: "avatar"
		}
	}
};
