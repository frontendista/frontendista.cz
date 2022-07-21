<script context="module" lang="ts">
	import Divider from "$common/divider.svelte";
	import { INDEX_PAGE_DESCRIPTION, INDEX_PAGE_TITLE } from "$root/seo.json";

	import type { Load } from ".svelte-kit/types/src/routes/__types/index";

	export const load: Load = async () => {
		return {
			stuff: {
				title: INDEX_PAGE_TITLE,
				description: INDEX_PAGE_DESCRIPTION
				// TODO: image
			}
		};
	};
</script>

<!-- TODO: Add content -->
<h1>Home</h1>
<Divider />
