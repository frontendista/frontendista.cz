import { withTransition } from "$utils/with-transition";
import { globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { DESKTOP_START_MQ, MOBILE_START_MQ, SIDE_BAR_WIDTH, TOP_BAR_HEIGHT } from "./constants.css";
import { utilities, vars } from "./theme.css";

globalStyle(":root", {
	background: vars.bg.primary,
	color: vars.fg.primary
});

globalStyle("body", {
	paddingTop: TOP_BAR_HEIGHT,
	paddingLeft: SIDE_BAR_WIDTH,
	"@media": {
		[MOBILE_START_MQ]: {
			paddingLeft: 0
		}
	}
});

globalStyle("*[data-sr='true']", {
	border: "0 !important",
	clip: "rect(0 0 0 0) !important",
	clipPath: "inset(50%) !important",
	height: "1px !important",
	margin: "0 -1px -1px 0 !important",
	overflow: "hidden !important",
	padding: "0 !important",
	position: "absolute",
	width: "1px !important",
	whiteSpace: "nowrap"
});

globalStyle("*", {
	transition: utilities.transitionGlobal
});

globalStyle("*:focus-visible", {
	boxShadow: `0 0 0 4px ${vars.brand.tertiary}`,
	outline: "none"
});

globalStyle("input, textarea", {
	color: vars.fg.primary
});

globalStyle("input::placeholder, textarea::placeholder", {
	color: "#555"
});

globalStyle("#content", {
	maxWidth: "48rem",
	margin: "0 auto",
	padding: "1rem",
	display: "flex",
	flexFlow: "column",
	gap: "4rem",
	"@media": {
		[DESKTOP_START_MQ]: {
			padding: "4rem 1rem"
		}
	}
});

export const buttonStyle = recipe({
	base: {
		color: vars.fg.primary,
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "0.75rem",
		fontSize: "1.25rem",
		fontWeight: "bold",
		borderRadius: "0.75rem",
		whiteSpace: "nowrap",
		transition: withTransition("transform 0.3s ease-in-out"),
		":active": {
			transform: "scale(0.95)",
			transition: "0.1s linear"
		}
	},
	variants: {
		size: {
			normal: {},
			large: {
				height: "3rem"
			}
		},
		square: {
			true: {
				padding: 0,
				width: "3rem"
			},
			false: {
				padding: "0 1.5rem"
			}
		},
		type: {
			primary: {
				background: vars.brand.primary,
				":hover": {
					background: vars.brand.secondary
				}
			},
			secondary: {
				":hover": {
					background: "#444"
				}
			}
		}
	},
	defaultVariants: {
		type: "primary",
		size: "normal",
		square: false
	}
});
