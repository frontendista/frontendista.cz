import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const customUtilities = plugin(({ addUtilities }) => {
	addUtilities({
		".offscreen": {
			position: "absolute",
			top: "-9999px",
			left: "-9999px"
		},
		".center": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}
	});
});

const config: Config = {
	content: ["./src/**/*.astro"],
	corePlugins: {
		preflight: false
	},
	theme: {
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
			},
			backgroundColor: {
				primary: "rgb(var(--bg-primary) / <alpha-value>)",
				secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
			}
		}
	},
	plugins: [
		customUtilities,
	]
};

export default config;
