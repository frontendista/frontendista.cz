/**
 * @type {import("eslint").ESLint.ConfigData}
 */
var config = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"plugin:astro/jsx-a11y-recommended",
		"plugin:tailwindcss/recommended",
		"plugin:svelte/recommended"
	],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {},
		},
		{
			files: ["*.spec.ts"],
			extends: [
				"plugin:playwright/recommended"
			]
		},
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser"
			}
		}
	],
	rules: {
		semi: "error",
		quotes: ["error", "double"],
		"tailwindcss/no-custom-classname": ["warn", {
			whitelist: ["min-h-view", "img-indicator", "offscreen", "center"]
		}],
		// NOTE: Buggy.
		"astro/jsx-a11y/alt-text": "off"
	},
};

module.exports = config;
