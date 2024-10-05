import "astro";

declare module "astro" {
	interface AstroClientDirectives {
		"client:event"?: string;
	}
}
