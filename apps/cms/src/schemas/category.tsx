import * as React from "react";

export default {
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: Rule => [
				Rule.required().error("Title is required"),
				Rule.min(2).error("Title must be at least 2 characters"),
				Rule.max(50).error("Title must be less than 50 characters")
			]
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			validation: Rule => [
				Rule.min(2).error("Description must be at least 2 characters"),
				Rule.max(50).error("Description must be less than 50 characters")
			]
		},
		{
			name: "color",
			title: "Color",
			type: "string",
			validation: Rule =>
				Rule.custom((color: string) => {
					if (!color) {
						return "Color is required";
					}

					if (color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
						return true;
					}

					return "Color must be a valid hex color without alpha channel.";
				})
		}
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			color: "color"
		},
		prepare({ title, subtitle, color }) {
			return {
				title,
				subtitle,
				media: (
					<div
						style={{
							height: "100%",
							width: "100%",
							background: color || "#ddd",
							borderRadius: "0.25rem"
						}}
					/>
				)
			};
		}
	}
};
