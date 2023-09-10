import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const customUtilities = plugin(({ addUtilities }) => {
	addUtilities({
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
			sm: "0.25rem",
			md: "0.5rem",
			lg: "1rem",
			xl: "2rem"
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
				primary: "var(--fg-primary)",
			},
			backgroundColor: {
				primary: "var(--bg-primary)",
				secondary: "var(--bg-secondary)",
			}
		}
	},
	plugins: [
		customUtilities,
		plugin(({ matchUtilities }) => {
			matchUtilities({
				"text-brand": generate("color"),
				"bg-brand": generate("backgroundColor"),
			}, {
				values: {
					"500": "oklch(70% 0.333 340.94 / <alpha-value>)",
					"600": "oklch(82.06% 0.187 207.53 / <alpha-value>)"
				},
				type: "color"
			});
		})
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
