<script context="module" lang="ts">
	import DigitCounter from "$components/digit-counter.svelte";

	import ContactForm from "$modules/contact-form.svelte";
	import { CONTACT_PAGE_DESCRIPTION, CONTACT_PAGE_TITLE } from "$root/seo.json";
	import { getMessageCount } from "$utils/api";

	import type { Load } from ".svelte-kit/types/src/routes/contact/__types/index";

	export const load: Load = async ({ fetch }) => {
		return {
			props: {
				count: await getMessageCount(fetch)
			},
			stuff: {
				title: CONTACT_PAGE_TITLE,
				description: CONTACT_PAGE_DESCRIPTION
				// TODO: image
			}
		};
	};
</script>

<script lang="ts">
	import Link from "$common/link.svelte";
	import Divider from "$common/divider.svelte";
	import { description } from "$components/digit-counter.css";

	export let count: number;
</script>

<section>
	<h1>Contact form</h1>
	<p>
		It sends a message to my
		<Link href="https://discord.gg/57zEpFGTDN">Discord Server</Link>.
	</p>
</section>
<Divider />
<DigitCounter value={count} minimalDigitCount={4}>
	<p class={description}>
		<span data-sr="true">{count} messages sent since initial release</span>
		<span aria-hidden="true">Messages sent since initial release</span>
	</p>
</DigitCounter>
<Divider />
<ContactForm />
