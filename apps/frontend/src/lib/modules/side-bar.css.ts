import { SIDE_BAR_WIDTH, TOP_BAR_HEIGHT } from "$stylesheets/constants.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	width: SIDE_BAR_WIDTH,
	position: "fixed",
	top: TOP_BAR_HEIGHT,
	left: 0,
	// TODO: Token
	borderRight: "1px solid #333",
	// TODO: Token
	background: "#231F23",
	height: "100%",
	padding: "1rem"
});

export const list = style({
	listStyleType: "none",
	padding: 0,
	margin: 0,
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem"
});
