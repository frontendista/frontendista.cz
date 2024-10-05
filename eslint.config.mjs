import { resolve, dirname } from "node:path";
import { fileURLToPath } from 'node:url';

import js from "@eslint/js";
import ts from "typescript-eslint";

import tailwind from "eslint-plugin-tailwindcss";
import astro from "eslint-plugin-astro";
import playwright from "eslint-plugin-playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
			// ESLint
			"quotes": ["error", "double"],
			"semi": "error",
			"indent": ["error", "tab"],

			// Astro.js
			"astro/jsx-a11y/alt-text": "off",

			// TailwindCSS
			"tailwindcss/no-custom-classname": ["warn", {
				whitelist: ["input-required"]
			}],

			// @typescript-eslint
			"@typescript-eslint/triple-slash-reference": "off"
		}
	},
	{
		settings: {
			tailwindcss: {
				config: resolve(__dirname, "./apps/web/tailwind.config.ts"),
			},
		},
	},
	{
		ignores: [
			"**/.astro/**/*.*",
			"**/.wrangler/**/*.*",
			"**/.vercel/**/*.*",
			"**/dist/**/*.*",
		],
	}
];
