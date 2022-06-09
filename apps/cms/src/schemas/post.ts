export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => [
				Rule.required().error("Title is required"),
				Rule.min(2).error("Title must be at least 2 characters"),
				Rule.max(50).error("Title must be less than 50 characters")
			]
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule) => [
				Rule.required().error("Description is required"),
				Rule.min(50).error("Description must be at least 50 characters"),
				Rule.max(160).error("Description must be less than 160 characters")
			],
			description: "Description of the post used for SEO."
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96
			}
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
			validation: (Rule) => Rule.required().error("Author is required")
		},
		{
			name: "thumbnail",
			title: "Thumbnail",
			type: "image",
			options: {
				hotspot: true
			},
			validation: (Rule) => Rule.required().error("Thumbnail is required"),
			description: "The image should be at least TODOxTODO pixels"
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
			validation: [
				(Rule) => Rule.required().error("Categories is required"),
				(Rule) => Rule.min(1).error("At least 1 category is required"),
				(Rule) => Rule.max(5).error("No more than 5 categories are allowed")
			],
			options: {
				sortable: false
			}
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
			readOnly: ({ document: { _id } }) => _id && !_id.startsWith("drafts."),
			description:
				"The date and time this post was published. Note that after publishing, this value can't be changed.",
			validation: (Rule) =>
				Rule.custom((value: string, { document: { _id } }) => {
					// If the document is published we don't want to do any validation
					if (_id && !_id.startsWith("drafts.")) {
						return true;
					}

					const date = new Date(value);
					const now = new Date();

					if (date.getTime() > now.getTime()) {
						return true;
					}

					return "Published date must be in the future.";
				})
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
			validation: (Rule) => Rule.required().error("Body is required")
		}
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "thumbnail"
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`
			});
		}
	},
	initialValue: {
		categories: [],
		publishedAt: new Date().toISOString()
	}
};
