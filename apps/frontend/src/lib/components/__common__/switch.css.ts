import { globalStyle, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const switchContaniner = style({
	display: "inline-flex",
	alignItems: "center",
	gap: "0.75rem"
});

export const switchComponent = style({
	width: 52,
	height: 32,
	borderRadius: 999,
	padding: 2,
	border: "2px solid #333"
});

export const switchKnob = style({
	height: 24,
	width: 24,
	top: 2,
	background: "#333",
	display: "block",
	borderRadius: 999,
	transition: "transform 0.3s"
});

export const switchEnabled = style({
	background: "#3BB2F6",
	border: 0,
	padding: 4
});

export const switchLabel = style({
	fontWeight: 700
});

globalStyle(`${switchEnabled} ${switchKnob}`, {
	transform: `translateX(${calc.subtract("100%", "4px")})`
});
