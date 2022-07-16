import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexFlow: "column wrap"
});

globalStyle(`${container} span`, {
	textTransform: "uppercase",
	fontWeight: 800
});
