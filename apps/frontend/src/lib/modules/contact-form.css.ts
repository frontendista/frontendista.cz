import { globalStyle, style } from "@vanilla-extract/css";

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
		"(min-width: 768px)": {
			flexDirection: "row"
		}
	}
});

globalStyle(`${formButtonGroup} > *`, {
	flex: "1 1 auto",
	textTransform: "uppercase"
});
