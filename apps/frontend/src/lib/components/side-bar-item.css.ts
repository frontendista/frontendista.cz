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
	":hover": {
		// TODO: Token, Transition
		background: "#333"
	},
	":active": {
		// TODO: Token
		background: "#555"
	},
	selectors: {
		"&[aria-current=true]": {
			// TODO: Token
			background: "#3A333A"
		}
	}
});

export const linkText = style({
	flexGrow: 1,
	textTransform: "uppercase",
	fontWeight: 800
});

export const favicon = style({
	height: "1em"
});
