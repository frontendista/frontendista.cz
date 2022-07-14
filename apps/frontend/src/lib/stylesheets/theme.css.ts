import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const utilities = createGlobalTheme(":root", {
	transitionGlobal: "box-shadow 0.5s ease, background 0.3s linear",
	shadow: {
		lowElevation: "",
		mediumElevation: "",
		highElevation: `
		0.3px 0.5px 0.7px hsl(0deg 0% 0% / 0.06),
		1.7px 3.3px 4.6px -0.2px hsl(0deg 0% 0% / 0.07),
		3px 5.9px 8.3px -0.4px hsl(0deg 0% 0% / 0.07),
    	4.5px 8.9px 12.5px -0.6px hsl(0deg 0% 0% / 0.08),
    	6.5px 12.9px 18.1px -0.8px hsl(0deg 0% 0% / 0.09),
    	9.2px 18.4px 25.8px -1px hsl(0deg 0% 0% / 0.09),
    	13px 26px 36.4px -1.2px hsl(0deg 0% 0% / 0.1),
    	18.2px 36.4px 51px -1.4px hsl(0deg 0% 0% / 0.11),
    	25px 50px 70px -1.6px hsl(0deg 0% 0% / 0.11)
		`
	}
});

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
	}
});
