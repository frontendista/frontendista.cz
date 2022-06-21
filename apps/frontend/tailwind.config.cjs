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
			}
		}
	},
	plugins: []
};

module.exports = config;
