import tinydate from "tinydate";

export const dateTemplate = tinydate("{DD} {MMMM} {YYYY}", {
	MMMM: d => d.toLocaleDateString("default", { month: "long" }),
	DD: d => d.getDate()
});
