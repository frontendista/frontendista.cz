import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
	bg: {
		primary: "bg-primary",
		secondary: "bg-secondary",
		tertiary: "bg-tertiary"
	},
	fg: {
		primary: "fg-primary"
	},
	brand: {
		primary: "brand-primary"
	},
	transition: {
		focus: "transition-focus"
	}
});

createGlobalTheme(":root[data-theme=light]", vars, {
	bg: {
		primary: "#fff",
		secondary: "TODO",
		tertiary: "TODO"
	},
	fg: {
		primary: "#000"
	},
	brand: {
		primary: "#2563eb"
	},
	transition: {
		focus: "0.5s box-shadow ease"
	}
});

createGlobalTheme(":root[data-theme=dark]", vars, {
	bg: {
		primary: "#100E0F",
		secondary: "#231f23",
		tertiary: "#333"
	},
	fg: {
		primary: "#f2f2f2"
	},
	brand: {
		primary: "#2563eb"
	},
	transition: {
		focus: "0.5s box-shadow ease"
	}
});
