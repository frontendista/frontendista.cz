import js from "@eslint/js";
import ts from "typescript-eslint";

import tailwind from "eslint-plugin-tailwindcss";
import astro from "eslint-plugin-astro";
import playwright from "eslint-plugin-playwright";

/**
 * @type {import("eslint").ESLint.ConfigData}
 */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...tailwind.configs["flat/recommended"],
	{
		...astro.configs["flat/jsx-a11y-recommended"],
		files: ["*.astro"],
	},
	{
		...playwright.configs["flat/recommended"],
		files: ["*.spec.ts"]
	},
	{
		rules: {
			"quotes": ["error", "double"],
			"semi": "error",
			"astro/jsx-a11y/alt-text": "off",
			"tailwindcss/no-custom-classname": "off",
			"@typescript-eslint/triple-slash-reference": "off"
		}
	},
	{
		ignores: ["**/.astro/**/*.*"],
	}
];
