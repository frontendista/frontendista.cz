import { SIDE_BAR_WIDTH, TOP_BAR_HEIGHT } from "$stylesheets/constants.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	position: "fixed",
	top: 0,
	left: 0,
	height: TOP_BAR_HEIGHT,
	width: "100%",
	display: "flex",
	// TODO: Token
	borderBottom: "1px solid #333",
	// TODO: Token
	background: "#100e0f"
});

export const logo = style({
	width: SIDE_BAR_WIDTH,
	// TODO: Token
	borderRight: "1px solid #333",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "1.75rem",
	textTransform: "uppercase",
	fontWeight: 800,
	// TODO: Token
	background: "#231F23"
});
