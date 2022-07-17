import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexFlow: "column wrap",
	gap: "1rem",
	padding: "1rem"
});

export const formButtonGroup = style({
	display: "flex",
	gap: "1rem",
	height: "3rem"
});

globalStyle(`${formButtonGroup} > *`, {
	flex: "1 1 auto"
});
