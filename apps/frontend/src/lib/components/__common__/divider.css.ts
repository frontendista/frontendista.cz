import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";

export const divider = style({
	height: 1,
	width: "4rem",
	background: vars.bg.tertiary
});
