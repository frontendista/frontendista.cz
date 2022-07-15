import { style } from "@vanilla-extract/css";

export const container = style({
	position: "relative",
	overflow: "hidden",
	":before": {
		position: "absolute",
		zIndex: -100,
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		content: "",
		background: "var(--placeholder) no-repeat",
		backgroundSize: "cover",
		filter: "blur(32px)"
	}
});
