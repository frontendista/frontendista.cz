import { globalStyle } from "@vanilla-extract/css";
import { SIDE_BAR_WIDTH, TOP_BAR_HEIGHT } from "./constants.css";
import { vars } from "./theme.css";

globalStyle(":root", {
	background: vars.bg.primary,
	color: vars.fg.primary
});

globalStyle("body", {
	paddingTop: TOP_BAR_HEIGHT,
	paddingLeft: SIDE_BAR_WIDTH,
	"@media": {
		"(max-width: 768px)": {
			paddingLeft: 0
		}
	}
});

globalStyle(".visuallyHidden", {
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
});
