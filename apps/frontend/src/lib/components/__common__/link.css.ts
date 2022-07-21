import { vars } from "$stylesheets/theme.css";
import { withTransition } from "$utils/with-transition";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
	display: "inline-flex",
	alignItems: "center",
	gap: "0.5rem",
	fontWeight: 700,
	color: vars.brand.tertiary,
	verticalAlign: "bottom",
	backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8))",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "bottom right",
	backgroundSize: "calc(100% - 1.5rem) 3px",
	transition: withTransition("transform 0.3s ease-in-out"),
	":hover": {
		backgroundImage: `linear-gradient(${vars.brand.secondary}, ${vars.brand.secondary})`,
		color: vars.brand.secondary
	},
	":active": {
		transform: "scale(0.95)",
		transition: "0.1s linear"
	}
});

globalStyle(`${container}:hover svg`, {
	backgroundPositionX: "-10000%"
});

globalStyle(`${container}:hover g`, {
	transform: "translateX(0)",
	opacity: 1
});

export const favicon = style({
	height: "1em",
	width: "auto",
	backgroundSize: "99% 99%",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat"
});

globalStyle(`${favicon} g`, {
	transform: "translateX(100%)",
	opacity: 0,
	transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
});
