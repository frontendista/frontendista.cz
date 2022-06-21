<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/__types/index";

	export const load: Load = async () => {
		return {
			stuff: {
				title: "Home",
				description: "TODO: Index page meta tag description"
				// TODO: image
			}
		};
	};
</script>

<h1>TODO: Home</h1>
