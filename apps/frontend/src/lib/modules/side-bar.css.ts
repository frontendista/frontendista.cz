import {
	MOBILE_START_MQ,
	SIDE_BAR_WIDTH,
	SIDE_BAR_ZINDEX,
	TOP_BAR_HEIGHT
} from "$stylesheets/constants.css";
import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const container = style({
	width: SIDE_BAR_WIDTH,
	position: "fixed",
	top: TOP_BAR_HEIGHT,
	left: 0,
	borderRight: `1px solid ${vars.bg.tertiary}`,
	background: vars.bg.secondary,
	height: calc.subtract("100%", TOP_BAR_HEIGHT),
	padding: "1rem",
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	zIndex: SIDE_BAR_ZINDEX,
	overflow: "auto",
	"@media": {
		[MOBILE_START_MQ]: {
			width: "100vw",
			display: "none"
		}
	}
});

export const visible = style({
	"@media": {
		[MOBILE_START_MQ]: {
			display: "flex"
		}
	}
});

export const list = style({
	listStyleType: "none",
	padding: 0,
	margin: 0,
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem"
});

export const listHeader = style({
	fontWeight: 700,
	fontSize: "0.75rem",
	textTransform: "uppercase",
	lineHeight: 1.5,
	marginBottom: "0.5rem"
});
