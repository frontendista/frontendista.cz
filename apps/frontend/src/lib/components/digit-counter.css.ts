import { DESKTOP_START_MQ, MOBILE_START_MQ } from "$stylesheets/constants.css";
import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
	display: "flex",
	alignItems: "center",
	flexFlow: "row wrap",
	gap: "1rem"
});

export const innerContainer = style({
	display: "flex",
	gap: "0.75rem"
});

export const digitContainer = recipe({
	base: {
		fontSize: "2.25rem",
		fontWeight: 800,
		background: vars.bg.secondary,
		height: "5rem",
		width: "4.5rem",
		position: "relative",
		overflow: "hidden",
		borderRadius: "0.75rem"
	},
	variants: {
		isZero: {
			true: {
				opacity: 0.5
			}
		}
	}
});

export const digitWrapper = style({
	position: "absolute",
	height: "100%",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});

export const description = style({
	fontWeight: 500,
	flex: "1 1 auto",
	textAlign: "center",
	"@media": {
		"(max-width: 65em)": {
			textAlign: "left"
		}
	}
});
