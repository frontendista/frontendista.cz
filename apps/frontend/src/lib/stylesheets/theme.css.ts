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
		global: "transition-global"
	}
});

createGlobalTheme(":root[data-theme=light]", vars, {
	bg: {
		primary: "#fff",
		secondary: "#f2f2f2",
		tertiary: "#000"
	},
	fg: {
		primary: "#000"
	},
	brand: {
		primary: "#2563eb"
	},
	transition: {
		global: "box-shadow 0.5s ease, color 0.3s linear, background 0.3s linear"
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
		global: "box-shadow 0.5s ease, color 0.3s linear, background 0.3s linear"
	}
});
