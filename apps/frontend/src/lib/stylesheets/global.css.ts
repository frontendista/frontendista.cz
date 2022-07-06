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
