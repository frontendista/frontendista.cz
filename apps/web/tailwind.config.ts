import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const customUtilities = plugin(({ addUtilities, addVariant }) => {
	addVariant("motion", [":root[data-motion=\"on\"] &", "@media (prefers-reduced-motion: no-preference) { :root[data-js=\"off\"] & }"]);addVariant("motion", [":root[data-motion=\"on\"] &", "@media (prefers-reduced-motion: no-preference) { :root[data-js=\"off\"] & }"]);

	addUtilities({
		".offscreen": {
			position: "fixed",
			top: "-9999px",
			left: "-9999px"
		},
		".center": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		".brackets": {
			"&:before": {
				content: "'['"
			},
			"&:after": {
				content: "']'"
			}
		}
	});
});

const config: Config = {
	content: ["./src/**/*.astro"],
	corePlugins: {
		preflight: false
	},
	theme: {
		fontSize: {
			h1: "3.052rem",
			h2: "2.441rem",
			h3: "1.953rem",
			h4: "1.563rem",
			base: "1.25rem",
		},
		spacing: {
			"0": "0",
			sm: "0.25rem",
			md: "0.5rem",
			lg: "1rem",
			xl: "2rem",
			"2xl": "4rem",
			"3xl": "8rem",
		},
		screens: {
			sm: "32em",
			md: "48em",
			lg: "64em",
			xl: "80em",
			"2xl": "120em",
			"uw": "160em"
		},
		extend: {
			colors: {
				ok: {
					"400": "oklch(80.03% 0.29 151.71 / <alpha-value>)",
					"500": "oklch(72.27% 0.28 149.58 / <alpha-value>)"
				},
				brand: {
					"500": "oklch(70% 0.333 340.94 / <alpha-value>)",
					"600": "oklch(60% 0.28 340.94 / <alpha-value>)"
				}
			},
			height: {
				view: "var(--view-height)"
			},
			minHeight: {
				view: "var(--view-height)"
			},
			maxWidth: {
				content: "120rem"
			},
			textColor: {
				primary: "rgb(var(--fg-primary) / <alpha-value>)",
				secondary: "rgb(var(--fg-secondary) / <alpha-value>)",
			},
			backgroundColor: {
				primary: "rgb(var(--bg-primary) / <alpha-value>)",
				secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
			},
			borderColor: {
				primary: "rgb(var(--fg-primary) / <alpha-value>)",
			}
		}
	},
	plugins: [
		customUtilities,
	]
};

export default config;
