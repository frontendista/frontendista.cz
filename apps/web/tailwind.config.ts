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

const customComponents = plugin(({ addComponents }) => {
	addComponents({
		"[data-btn]": {
			display: "inline-flex",
			fontWeight: "700",
			fontSize: "1.25rem",
			padding: "1.5rem 2rem",
			width: "100%",
			textTransform: "uppercase"
		},
		"[data-btn='primary']": {
			background: "#fff",
			color: "#000"
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
		plugin(({ matchUtilities }) => {
			matchUtilities({
				"text-brand": generate("color"),
				"bg-brand": generate("backgroundColor"),
				"decoration-brand": generate("textDecorationColor"),
			}, {
				values: {
					"500": "oklch(70% 0.333 340.94 / <alpha-value>)",
					"600": "oklch(82.06% 0.187 207.53 / <alpha-value>)"
				},
				type: "color"
			});
		}),
		customUtilities,
		customComponents,
	]
};

function generate(property: string) {
	return (value: unknown) => {
		if (typeof value === "function") {
			return {
				[property]: value("brand")
			};
		}
	
		return {
			[property]: value
		};
	};
}

export default config;
