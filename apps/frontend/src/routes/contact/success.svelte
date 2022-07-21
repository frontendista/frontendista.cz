<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/contact/__types/success";

	export const load: Load = async () => {
		return {
			stuff: {
				title: "Success",
				description: "TODO"
				// TODO: image
			}
		};
	};
</script>

<h1>Heyaaa!</h1>
