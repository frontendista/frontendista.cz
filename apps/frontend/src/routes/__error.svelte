<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/__types/__error";

	export const load: Load = async () => {
		return {
			stuff: {
				title: "Error",
				description: "TODO: Error page meta tag description"
			}
		};
	};
</script>

<div>TODO: Error page</div>
