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
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true
			}
		},
		{
			name: "bio",
			title: "Bio",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: []
				}
			]
		}
	],
	preview: {
		select: {
			title: "name",
			subtitle: "bio",
			media: "image"
		}
	}
};
