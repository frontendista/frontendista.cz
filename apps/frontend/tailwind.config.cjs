const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @type {import('tailwindcss').Config}
 */
const config = {
	content: ["./src/**/*.{html,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["JM", ...defaultTheme.fontFamily.sans]
			},
			height: {
				topbar: "5rem"
			},
			width: {
				sidebar: "20rem",
				topbar: "calc(100% - 20rem)"
			}
		}
	},
	plugins: []
};

module.exports = config;
