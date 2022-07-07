import { SIDE_BAR_WIDTH, SIDE_BAR_ZINDEX, TOP_BAR_HEIGHT } from "$stylesheets/constants.css";
import { vars } from "$stylesheets/theme.css";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

export const container = style({
	position: "fixed",
	top: 0,
	left: 0,
	height: TOP_BAR_HEIGHT,
	width: "100%",
	display: "flex",
	borderBottom: `1px solid ${vars.bg.tertiary}`,
	background: "rgb(16, 14, 15, 0.5)",
	backdropFilter: "blur(10px) saturate(150%) contrast(150%)",
	zIndex: SIDE_BAR_ZINDEX
});

const gradientFlowAnimation = keyframes({
	from: {
		backgroundPosition: "0 center"
	},
	to: {
		backgroundPosition: "166% center"
	}
});

export const logo = style({
	width: SIDE_BAR_WIDTH,
	borderRight: `1px solid ${vars.bg.tertiary}`,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "1.75rem",
	textTransform: "uppercase",
	fontWeight: 800,
	background: vars.bg.secondary,
	":after": {
		content: "Frontendista"
	},
	"@media": {
		"(max-width: 768px)": {
			width: TOP_BAR_HEIGHT,
			":after": {
				content: "F"
			}
		}
	}
});

globalStyle(`${logo}:hover:after`, {
	backgroundSize: "250% auto",
	backgroundClip: "text",
	WebkitTextFillColor: "transparent",
	backgroundImage:
		"linear-gradient(90deg, rgba(252,0,255,1) 0%, rgba(0,219,222,1) 33%, rgba(0,219,222,1) 66%, rgba(252,0,255,1) 100%)",
	animation: `5s ${gradientFlowAnimation} linear infinite`
});

export const actionBar = style({
	padding: "1rem",
	flexGrow: 1,
	display: "flex"
});

export const actionBarButtonGroup = style({
	marginLeft: "auto"
});

export const actionButton = style({
	color: vars.fg.primary,
	display: "inline-flex",
	gap: "0.75rem",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
	padding: "0 1.5rem",
	fontSize: "1.25rem",
	fontWeight: "bold",
	textTransform: "uppercase",
	borderRadius: "0.75rem",
	transition: "0.3s ease-in-out",
	":hover": {
		// TODO: Token
		background: "#444"
	},
	":active": {
		transform: "scale(0.95)",
		transition: "0.1s linear"
	},
	"@media": {
		"(max-width: 768px)": {
			padding: "0 0.875rem"
		}
	}
});

globalStyle(`${actionButton} span`, {
	"@media": {
		"(max-width: 768px)": {
			display: "none"
		}
	}
});
