<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/contact/__types/index";

	export const load: Load = async () => {
		return {
			stuff: {
				title: "Contact",
				description: "TODO: Contact page meta tag description"
			}
		};
	};
</script>

<h1>Contact</h1>
