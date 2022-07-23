import { DIALOG_ZINDEX } from "$stylesheets/constants.css";
import { style } from "@vanilla-extract/css";

export const dialogContainer = style({
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: DIALOG_ZINDEX,
	background: "rgb(0 0 0 / 50%)",
	height: "100%",
	width: "100%",
	"@supports": {
		"(backdrop-filter: blur(10px))": {
			backdropFilter: "blur(10px) saturate(150%) contrast(150%)",
			background: "rgb(16, 14, 15, 0.5)"
		}
	}
});

export const diaologOverlay = style({
	width: "100%",
	height: "100%",
	position: "absolute",
	top: 0,
	left: 0
});
