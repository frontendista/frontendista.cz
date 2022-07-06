import { SIDE_BAR_WIDTH, SIDE_BAR_ZINDEX, TOP_BAR_HEIGHT } from "$stylesheets/constants.css";
import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	position: "fixed",
	top: 0,
	left: 0,
	height: TOP_BAR_HEIGHT,
	width: "100%",
	display: "flex",
	borderBottom: `1px solid ${vars.bg.tertiary}`,
	background: vars.bg.primary,
	zIndex: SIDE_BAR_ZINDEX
});

export const logo = style({
	width: SIDE_BAR_WIDTH,
	borderRight: `1px solid ${vars.bg.tertiary}`,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "1.75rem",
	textTransform: "uppercase",
	fontWeight: 800,
	background: vars.bg.secondary,
	":after": {
		content: "Frontendista"
	},
	"@media": {
		"(max-width: 768px)": {
			width: TOP_BAR_HEIGHT,
			":after": {
				content: "F"
			}
		}
	}
});

export const actionBar = style({
	padding: "1rem"
});
