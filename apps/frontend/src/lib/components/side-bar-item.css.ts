import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	height: "2rem"
});

export const link = style({
	display: "flex",
	alignItems: "center",
	height: "100%",
	width: "100%",
	gap: "0.75rem",
	paddingLeft: "0.75rem",
	paddingRight: "0.75rem",
	borderRadius: "0.75rem",
	outline: "none",
	":hover": {
		background: vars.bg.tertiary
	},
	":focus": {
		background: vars.bg.tertiary
	},
	":active": {
		transform: "scale(0.95)",
		transition: "0.1s linear"
	},
	selectors: {
		"&[aria-current=true]": {
			// TODO: Token
			background: "#3A333A"
		}
	},
	transition: "background 0.15s linear, transform 0.3s ease-in-out"
});

export const linkText = style({
	flexGrow: 1,
	textTransform: "uppercase",
	fontWeight: 800
});

export const favicon = style({
	height: "1em"
});
