import type { AstroIntegration } from "astro";

export default (): AstroIntegration => ({
	name: "client:event",
	hooks: {
		"astro:config:setup": ({ addClientDirective }) => {
			addClientDirective({
				name: "event",
				entrypoint: "./lib/event-directive.ts",
			});
		},
	},
});
