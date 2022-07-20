import { globalStyle, style } from "@vanilla-extract/css";
import { DESKTOP_START_MQ } from "$stylesheets/constants.css";
import { vars } from "$stylesheets/theme.css";

export const container = style({
	display: "flex",
	flexFlow: "column wrap",
	gap: "1rem"
});

export const formButtonGroup = style({
	display: "flex",
	gap: "1rem",
	flexDirection: "column",
	"@media": {
		[DESKTOP_START_MQ]: {
			flexDirection: "row-reverse"
		}
	}
});

globalStyle(`${formButtonGroup} > *`, {
	flex: "1 1 auto",
	textTransform: "uppercase"
});

export const formError = style({
	background: vars.bg.error,
	padding: "1.5rem",
	borderRadius: "0.75rem",
	display: "inline-flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "0.75rem",
	fontSize: "1.25rem",
	fontWeight: 700
});

globalStyle(`${formError} > p`, {
	fontSize: "1rem",
	fontWeight: 500
});
