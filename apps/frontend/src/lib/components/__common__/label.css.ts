import { vars } from "$stylesheets/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	gap: "0.5rem",
	flexFlow: "column wrap",
	border: `3px solid ${vars.bg.tertiary}`,
	borderRadius: "0.75rem",
	padding: "1rem 1.5rem",
	":focus-within": {
		borderColor: vars.brand.tertiary
	}
});

globalStyle(`${container} input:focus-visible, ${container} textarea:focus-visible`, {
	boxShadow: "none"
});

export const labelText = style({
	textTransform: "uppercase",
	fontWeight: 800,
	fontSize: "0.75rem",
	display: "flex",
	justifyContent: "space-between",
	flexFlow: "row wrap"
});

export const requiredField = style({
	":after": {
		content: " *",
		color: vars.error.tertiary
	}
});

export const errorField = style({
	borderColor: vars.error.tertiary
});

export const errorMessage = style({
	color: vars.error.tertiary,
	display: "inline-flex",
	alignItems: "center",
	gap: "0.5rem"
});
