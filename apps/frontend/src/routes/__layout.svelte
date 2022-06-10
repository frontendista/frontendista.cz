<script lang="ts">
	import { page } from "$app/stores";
	import Navigation from "$modules/navigation.svelte";
	import "$stylesheets/global.scss";
	import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "$utils/constants/seo";
</script>

<svelte:head>
	<title>{$page.stuff.title || DEFAULT_TITLE}</title>
	<link rel="canonical" href={$page.url.href} />
	<meta name="description" content={$page.stuff.description || DEFAULT_DESCRIPTION} />
	<meta property="og:title" content={$page.stuff.title || DEFAULT_TITLE} />
	<meta property="og:description" content={$page.stuff.description || DEFAULT_DESCRIPTION} />
	<meta property="og:url" content={$page.url.href} />
	{#if $page.stuff.image}
		<meta property="og:image" content={$page.stuff.image} />
	{/if}
</svelte:head>

<Navigation />
<slot />
