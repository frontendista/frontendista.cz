<script context="module" lang="ts">
	import { ABOUT_PAGE_DESCRIPTION, ABOUT_PAGE_TITLE } from "$utils/constants/seo";

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
