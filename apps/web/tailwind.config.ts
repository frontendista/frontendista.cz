import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const customUtilities = plugin(({ addUtilities, addVariant }) => {
	addVariant("motion", [":root[data-motion=\"on\"] &", "@media (prefers-reduced-motion: no-preference) { :root[data-js=\"off\"] & }"]); addVariant("motion", [":root[data-motion=\"on\"] &", "@media (prefers-reduced-motion: no-preference) { :root[data-js=\"off\"] & }"]);
	addVariant("night", [":root[data-theme=\"dark\"] &", "@media (prefers-color-scheme: dark) { :root[data-js=\"off\"] & }"]);

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
		},
		".img-indicator": {
			backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDNINWMtMS4xMDMgMC0yIC44OTctMiAydjE0YzAgMS4xMDMuODk3IDIgMiAyaDE0YzEuMTAzIDAgMi0uODk3IDItMlY1YzAtMS4xMDMtLjg5Ny0yLTItMnpNNSAxOVY1aDE0bC4wMDIgMTRINXoiLz48cGF0aCBkPSJtMTAgMTQtMS0xLTMgNGgxMmwtNS03eiIvPjwvc3ZnPgo=\")",
			backgroundSize: "50%",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center"
		}
	});
});

export const screens = {
	/**
	 * 512px
	 */
	sm: "32em",
	/**
	 * 768px
	 */
	md: "48em",
	/**
	 * 1024px
	 */
	lg: "64em",
	/**
	 * 1280px
	 */
	xl: "80em",
	/**
	 * 1920px
	 */
	"2xl": "120em",
	/**
	 * 2560px
	 */
	"uw": "160em"
};

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
		screens,
		extend: {
			animation: {
				"fade-in": "fade-in 0.5s ease-in-out forwards"
			},
			colors: {
				ok: {
					"400": "oklch(80.03% 0.29 151.71 / <alpha-value>)",
					"500": "oklch(72.27% 0.28 149.58 / <alpha-value>)"
				},
				error: {
					"600": "oklch(57.71% 0.26 27.33 / <alpha-value>)"
				},
				brand: {
					"300": "oklch(83.3% 0.15 321.43 / <alpha-value>)",
					"500": "oklch(70% 0.333 340.94 / <alpha-value>)",
					"600": "oklch(60% 0.28 340.94 / <alpha-value>)",
					"800": "oklch(45.19% 0.22 324.59 / <alpha-value>)"
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
