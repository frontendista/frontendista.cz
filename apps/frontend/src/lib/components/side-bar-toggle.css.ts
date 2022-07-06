import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	color: vars.fg.primary,
	fontSize: "1.5rem",
	width: "3rem",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"@media": {
		"(min-width: 768px)": {
			display: "none"
		}
	}
});
