import { SIDE_BAR_WIDTH, TOP_BAR_HEIGHT } from "$stylesheets/constants.css";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const container = style({
	width: SIDE_BAR_WIDTH,
	position: "fixed",
	top: TOP_BAR_HEIGHT,
	left: 0,
	// TODO: Token
	borderRight: "1px solid #333",
	// TODO: Token
	background: "#231F23",
	height: calc.subtract("100%", TOP_BAR_HEIGHT),
	padding: "1rem",
	display: "flex",
	flexDirection: "column",
	gap: "2rem"
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
