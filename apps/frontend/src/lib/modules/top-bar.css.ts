import {
	DESKTOP_START_MQ,
	MOBILE_START_MQ,
	SIDE_BAR_WIDTH,
	TOP_BAR_HEIGHT,
	TOP_BAR_ZINDEX
} from "$stylesheets/constants.css";
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
	zIndex: TOP_BAR_ZINDEX
});

const gradientFlowAnimation = keyframes({
	from: {
		backgroundPositionX: "0%"
	},
	to: {
		backgroundPositionX: "200%"
	}
});

const gradientFlowAnimationSmall = keyframes({
	from: {
		color: vars.brand.primary
	},
	"50%": {
		color: vars.brand.tertiary
	},
	to: {
		color: vars.brand.primary
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
		[MOBILE_START_MQ]: {
			width: TOP_BAR_HEIGHT,
			":after": {
				content: "F"
			}
		}
	}
});

globalStyle(`${logo}:hover:after`, {
	"@media": {
		[DESKTOP_START_MQ]: {
			backgroundSize: "200% auto",
			backgroundClip: "text",
			WebkitTextFillColor: "transparent",
			backgroundImage: `linear-gradient(90deg, ${vars.brand.primary} 0%, ${vars.brand.tertiary} 50%, ${vars.brand.primary} 100%)`,
			animation: `5s ${gradientFlowAnimation} linear infinite`
		},
		[MOBILE_START_MQ]: {
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
	gap: "0.75rem",
	"@media": {
		[MOBILE_START_MQ]: {
			marginRight: "auto",
			marginLeft: 0
		}
	}
});

export const actionButton = style({
	textTransform: "uppercase",
	height: "100%",
	"@media": {
		[MOBILE_START_MQ]: {
			padding: "0 0.875rem !important"
		}
	}
});

globalStyle(`${actionButton} span`, {
	"@media": {
		[MOBILE_START_MQ]: {
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
