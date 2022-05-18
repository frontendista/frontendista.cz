<script lang="ts">
	export let href: string;
	export let faviconSize: 16 | 32 | 64 | 128 = 32;
	export let target: "_blank" | null = null;

	let url: URL | null = null;

	$: isExternalHref = href.startsWith("http");

	$: if (isExternalHref) {
		url = new URL(href);
	}
</script>

<a sveltekit:prefetch={(!isExternalHref && !href.startsWith("mailto")) || null} {href} {target}>
	{#if isExternalHref}
		<img src={`https://www.google.com/s2/favicons?domain=${href}&sz=${faviconSize}`} alt="" />
	{/if}
	<slot>
		{url?.hostname || href}
	</slot>
</a>

<style lang="scss">
	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		font-size: 1.25rem;

		& img {
			width: 1em;
			height: 1em;
		}
	}
</style>
