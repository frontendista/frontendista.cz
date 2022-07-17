import { vars } from "$stylesheets/theme.css";
import { withTransition } from "$utils/with-transition";
import { style } from "@vanilla-extract/css";

export const container = style({
	minHeight: "5rem",
	marginTop: "0.5rem"
});

export const remainingCharacters = style({
	transition: withTransition("color 0.5s ease-in"),
	fontSize: "0.75rem",
	fontWeight: 700,
	textTransform: "uppercase"
});

export const remainingRed = style({
	color: vars.error.tertiary
});

export const remainingYellow = style({
	color: "yellow"
});
