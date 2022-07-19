import * as React from "react";
import { defineField, defineType } from "sanity";

export const category = defineType({
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation(rule) {
				return rule
					.required()
					.error("Title is required")
					.min(2)
					.error("Title must be at least 2 characters")
					.max(50)
					.error("Title must be less than 50 characters");
			}
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			validation(rule) {
				return rule
					.min(2)
					.error("Description must be at least 2 characters")
					.max(50)
					.error("Description must be less than 50 characters");
			}
		}),
		defineField({
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
		})
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
							background: (color as string) || "#ddd",
							borderRadius: "0.25rem"
						}}
					/>
				)
			};
		}
	}
});
