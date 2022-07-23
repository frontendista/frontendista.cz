import { DIALOG_ZINDEX } from "$stylesheets/constants.css";
import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";

export const dialogContainer = style({
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: DIALOG_ZINDEX,
	background: "rgb(0 0 0 / 50%)",
	height: "100%",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"@supports": {
		"(backdrop-filter: blur(8px))": {
			backdropFilter: "blur(8px) saturate(150%)",
			background: "rgb(0 0 0 / 50%)"
		}
	}
});

export const dialogOverlay = style({
	width: "100%",
	height: "100%",
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: -1
});

export const dialogWrapper = style({
	background: vars.bg.primary,
	border: `3px solid ${vars.bg.tertiary}`,
	borderRadius: "0.75rem",
	padding: "1.5rem",
	maxWidth: "32rem",
	width: "100%"
});
