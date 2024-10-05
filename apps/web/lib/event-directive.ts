import type { ClientDirective } from "astro";

export default (function (load, options) {
	window.addEventListener(
		options.value,
		async () => {
			const hydrate = await load();
			await hydrate();
		},
		{ once: true },
	);
} satisfies ClientDirective);
