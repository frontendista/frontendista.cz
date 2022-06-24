import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
	bg: {
		primary: "bg-primary"
	},
	fg: {
		primary: "fg-primary"
	}
});

createGlobalTheme(":root[data-theme=light]", vars, {
	bg: {
		primary: "#fff"
	},
	fg: {
		primary: "#000"
	}
});

createGlobalTheme(":root[data-theme=dark]", vars, {
	bg: {
		primary: "#100E0F"
	},
	fg: {
		primary: "#f2f2f2"
	}
});
