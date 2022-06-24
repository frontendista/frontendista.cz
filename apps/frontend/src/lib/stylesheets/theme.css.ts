import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
	background: {
		primary: "bg-primary"
	}
});

createGlobalTheme(":root[data-theme=light]", vars, {
	background: {
		primary: "white"
	}
});

createGlobalTheme(":root[data-theme=dark]", vars, {
	background: {
		primary: "black"
	}
});
