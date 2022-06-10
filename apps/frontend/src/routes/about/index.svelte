<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/about/__types/index";

	export const load: Load = async () => {
		return {
			stuff: {
				title: "About",
				description: "TODO: About page meta tag description"
				// TODO: image
			}
		};
	};
</script>

<h1>About</h1>
