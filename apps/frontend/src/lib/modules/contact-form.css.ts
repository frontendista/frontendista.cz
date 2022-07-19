import { globalStyle, style } from "@vanilla-extract/css";
import { DESKTOP_START_MQ } from "$stylesheets/constants.css";

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
