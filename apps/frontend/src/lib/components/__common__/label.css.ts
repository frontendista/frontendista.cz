import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexFlow: "column wrap"
});

export const labelText = style({
	textTransform: "uppercase",
	fontWeight: 800
});

export const requiredField = style({
	":after": {
		content: "*"
	}
});
