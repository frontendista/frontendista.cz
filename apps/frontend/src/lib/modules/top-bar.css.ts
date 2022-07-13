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
	zIndex: SIDE_BAR_ZINDEX + 1
});

const gradientFlowAnimation = keyframes({
	from: {
		backgroundPosition: "0 center"
	},
	to: {
		backgroundPosition: "166% center"
	}
});

const gradientFlowAnimationSmall = keyframes({
	from: {
		color: "#fc00ff"
	},
	"50%": {
		color: "#00dbde"
	},
	to: {
		color: "#fc00ff"
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
	"@media": {
		"(min-width: 768px)": {
			backgroundSize: "250% auto",
			backgroundClip: "text",
			WebkitTextFillColor: "transparent",
			backgroundImage: "linear-gradient(90deg, #fc00ff 0%, #00dbde 33%, #00dbde 66%, #fc00ff 100%)",
			animation: `5s ${gradientFlowAnimation} linear infinite`
		},
		"(max-width: 768px)": {
			animation: `5s ${gradientFlowAnimationSmall} linear infinite`
		}
	}
});

export const actionBar = style({
	padding: "1rem",
	flexGrow: 1,
	display: "flex"
});

export const actionBarButtonGroup = style({
	marginLeft: "auto",
	display: "flex",
	gap: "0.75rem"
});

export const actionButton = style({
	textTransform: "uppercase",
	height: "100%",
	"@media": {
		"(max-width: 768px)": {
			padding: "0 0.875rem !important"
		}
	}
});

globalStyle(`${actionButton} span`, {
	"@media": {
		"(max-width: 768px)": {
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
		}
	}
});
