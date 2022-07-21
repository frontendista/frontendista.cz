import { SKIP_NAVIGATION_LINKS_ZINDEX } from "$stylesheets/constants.css";
import { utilities, vars } from "$stylesheets/theme.css";
import { withTransition } from "$utils/with-transition";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-9999%, -50%)",
	opacity: 0,
	padding: "1.5rem 2rem",
	border: `3px solid ${vars.bg.tertiary}`,
	borderRadius: "0.75rem",
	display: "flex",
	flexFlow: "column wrap",
	gap: "1rem",
	zIndex: SKIP_NAVIGATION_LINKS_ZINDEX,
	background: vars.bg.primary,
	boxShadow: utilities.shadow.highElevation,
	transition: withTransition("opacity 0.5s ease, transform 0s 0.5s"),
	":focus-within": {
		transform: "translate(-50%, -50%)",
		opacity: 1,
		transition: withTransition("opacity 0.5s ease")
	}
});

globalStyle(`${container} span`, {
	textAlign: "center",
	fontWeight: 800,
	fontSize: "1.25rem"
});

globalStyle(`${container} a`, {
	textTransform: "uppercase"
});
