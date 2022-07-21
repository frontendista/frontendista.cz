<script context="module" lang="ts">
	import Divider from "$common/divider.svelte";
	import { ABOUT_PAGE_DESCRIPTION, ABOUT_PAGE_TITLE } from "$root/seo.json";

	import type { Load } from ".svelte-kit/types/src/routes/about/__types/index";

	export const load: Load = async () => {
		return {
			stuff: {
				title: ABOUT_PAGE_TITLE,
				description: ABOUT_PAGE_DESCRIPTION
				// TODO: image
			}
		};
	};
</script>

<h1>About</h1>
<Divider />
