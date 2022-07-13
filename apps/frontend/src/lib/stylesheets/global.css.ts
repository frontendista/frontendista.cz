import { globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { SIDE_BAR_WIDTH, TOP_BAR_HEIGHT } from "./constants.css";
import { vars } from "./theme.css";

globalStyle(":root", {
	background: vars.bg.primary,
	color: vars.fg.primary
});

globalStyle("body", {
	paddingTop: TOP_BAR_HEIGHT,
	paddingLeft: SIDE_BAR_WIDTH,
	"@media": {
		"(max-width: 768px)": {
			paddingLeft: 0
		}
	}
});

globalStyle(".sr-only", {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	margin: "0 -1px -1px 0",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: 1,
	whiteSpace: "nowrap"
});

globalStyle("*", {
	transition: vars.transition.focus
});

globalStyle("*:focus-visible", {
	boxShadow: `0 0 0 4px ${vars.brand.primary}`,
	outline: "none"
});

export const buttonStyle = recipe({
	base: {
		color: vars.fg.primary,
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "0.75rem",
		padding: "0 1.5rem",
		fontSize: "1.25rem",
		fontWeight: "bold",
		borderRadius: "0.75rem",
		transition: `transform 0.3s ease-in-out, ${vars.transition.focus}`,
		":active": {
			transform: "scale(0.95)",
			transition: "0.1s linear"
		}
	},
	variants: {
		type: {
			primary: {
				background: "blue"
			},
			secondary: {
				":hover": {
					background: "#444"
				}
			}
		}
	},
	defaultVariants: {
		type: "primary"
	}
});
