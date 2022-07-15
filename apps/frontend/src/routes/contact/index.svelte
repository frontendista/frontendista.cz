<script context="module" lang="ts">
	import { CONTACT_PAGE_DESCRIPTION, CONTACT_PAGE_TITLE } from "$utils/constants/seo";

	import type { Load } from ".svelte-kit/types/src/routes/contact/__types/index";

	export const load: Load = async () => {
		return {
			stuff: {
				title: CONTACT_PAGE_TITLE,
				description: CONTACT_PAGE_DESCRIPTION
				// TODO: image
			}
		};
	};
</script>

<label>
	Name
	<input type="text" />
</label>
<label>
	Email
	<input type="text" />
</label>
<label>
	Message
	<textarea />
</label>
