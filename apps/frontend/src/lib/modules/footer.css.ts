import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	flexGrow: 1
});

globalStyle(`${container} section`, {
	flexGrow: 1
});

export const copyright = style({
	textAlign: "center",
	fontWeight: 800,
	marginBottom: "1rem",
	marginTop: "2rem",
	textTransform: "uppercase"
});
