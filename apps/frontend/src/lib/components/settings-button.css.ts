import { vars } from "$stylesheets/theme.css";
import { style } from "@vanilla-extract/css";

export const settingsPanel = style({
	position: "relative",
	padding: "1rem 1.5rem",
	borderRadius: "0.75rem",
	border: "3px solid #333",
	background: vars.bg.primary,
	display: "flex",
	flexFlow: "column wrap",
	gap: "0.75rem"
});
