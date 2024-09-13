import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const customUtilities = plugin(({ addUtilities, addVariant }) => {
	addVariant("motion", [":root[data-motion=\"on\"] &", "@media (prefers-reduced-motion: no-preference) { :root[data-js=\"off\"] & }"]); addVariant("motion", [":root[data-motion=\"on\"] &", "@media (prefers-reduced-motion: no-preference) { :root[data-js=\"off\"] & }"]);
	addVariant("night", [":root[data-theme=\"dark\"] &", "@media (prefers-color-scheme: dark) { :root[data-js=\"off\"] & }"]);
	addVariant("js", [":root[data-js=\"on\"] &"]);
	addVariant("nojs", [":root[data-js=\"off\"] &"]);

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
		".lines": {
			display: "inline-flex",
			alignItems: "center",
			width: "100%",
			fontWeight: "bold",
			gap: "1rem",
			"&:before": {
				content: "''",
				display: "block",
				width: "100%",
				height: "3px",
				backgroundColor: "currentColor"
			},
			"&:after": {
				content: "''",
				display: "block",
				width: "100%",
				height: "3px",
				backgroundColor: "currentColor"
			}
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
		},
		".counter": {
			counterReset: "counter",
			"& > li": {
				"&:before": {
					counterIncrement: "counter",
					content: "counter(counter) '.'",
					marginRight: "0.25em"
				}
			}
		},
		".counter-section": {
			counterReset: "section",
			"& > section > h2": {
				"&:before": {
					counterIncrement: "section",
					content: "counter(section) '. '",
					marginRight: "0.25em"
				}
			}
		},
		".tooltip-animation": {
			transformOrigin: "var(--radix-tooltip-content-transform-origin)",
			animation: "scale-in 0.25s ease-out"
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
	content: ["./src/**/*.{astro,tsx,ts}"],
	corePlugins: {
		preflight: false
	},
	theme: {
		fontSize: {
			h1: "3.052rem",
			h2: "2.441rem",
			h3: "1.953rem",
			h4: "1.563rem",
			icon: "1.5rem",
			base: "1.25rem",
			sm: "1rem"
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
				"fade-in": "fade-in 0.5s ease-in-out forwards",
				"fade-in-and-zoom": "fade-in 0.5s ease-in-out forwards, picture-zoom 6s ease-in-out alternate infinite",
			},
			colors: {
				ok: {
					"300": "oklch(87.12% 0.26 154.45 / <alpha-value>)",
					"400": "oklch(80.03% 0.29 151.71 / <alpha-value>)",
					"500": "oklch(72.27% 0.28 149.58 / <alpha-value>)",
					"800": "oklch(44.79% 0.16 151.33 / <alpha-value>)",
					"950": "oklch(26.64% 0.09 152.93 / <alpha-value>)"
				},
				warning: {
					"600": "oklch(86.06% 0.2 91.94 / <alpha-value>)"
				},
				error: {
					"300": "oklch(80.77% 0.14 19.57 / <alpha-value>)",
					"600": "oklch(57.71% 0.26 27.33 / <alpha-value>)",
					"950": "oklch(25.75% 0.11 26.04 / <alpha-value>)"
				},
				brand: {
					"300": "oklch(83.3% 0.15 321.43 / <alpha-value>)",
					"500": "oklch(70% 0.333 340.94 / <alpha-value>)",
					"600": "oklch(60% 0.28 340.94 / <alpha-value>)",
					"800": "oklch(45.19% 0.22 324.59 / <alpha-value>)"
				}
			},
			height: {
				view: "var(--vh, var(--view-height))",
				text: "1em"
			},
			minHeight: {
				view: "var(--vh, var(--view-height))"
			},
			maxWidth: {
				content: "120rem",
				form: "50rem"
			},
			textColor: {
				primary: "rgb(var(--fg-primary) / <alpha-value>)",
				secondary: "rgb(var(--fg-secondary) / <alpha-value>)",
			},
			backgroundColor: {
				hero: "rgb(var(--bg-hero) / <alpha-value>)",
				primary: "rgb(var(--bg-primary) / <alpha-value>)",
				secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
				fg: "rgb(var(--fg-primary) / <alpha-value>)",
			},
			borderColor: {
				primary: "rgb(var(--fg-primary) / <alpha-value>)",
				secondary: "rgb(var(--fg-secondary) / <alpha-value>)",
			},
			fill: {
				primary: "rgb(var(--bg-primary) / <alpha-value>)",
			}
		}
	},
	plugins: [
		customUtilities,
	]
};

export default config;
