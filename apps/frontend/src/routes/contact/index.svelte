<script context="module" lang="ts">
	import DigitCounter from "$components/digit-counter.svelte";

	import ContactForm from "$modules/contact-form.svelte";
	import { CONTACT_PAGE_DESCRIPTION, CONTACT_PAGE_TITLE } from "$root/seo.json";

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

<section>
	<h1>Contact form</h1>
	<p>It sends a message to my Discord Server.</p>
</section>
<DigitCounter value={32} minimalDigitCount={4} />
<ContactForm />
