<script lang="ts">
	import { page } from "$app/stores";
	import Footer from "$modules/footer.svelte";
	import Navigation from "$modules/navigation.svelte";
	import Sidebar from "$modules/sidebar.svelte";
	import TopBar from "$modules/top-bar.svelte";
	import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "$utils/constants/seo";
</script>

<svelte:head>
	<title>{$page.stuff.title || DEFAULT_TITLE}</title>
	<link rel="canonical" href={$page.url.href} />
	<meta name="description" content={$page.stuff.description || DEFAULT_DESCRIPTION} />
	<meta property="og:title" content={$page.stuff.title || DEFAULT_TITLE} />
	<meta property="og:description" content={$page.stuff.description || DEFAULT_DESCRIPTION} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:site_name" content="Frontendista" />
	<meta name="twitter:title" content={$page.stuff.title || DEFAULT_TITLE} />
	<meta name="twitter:description" content={$page.stuff.description || DEFAULT_DESCRIPTION} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@thesoreon" />
	<meta name="twitter:creator" content="@thesoreon" />
	{#if $page.stuff.image}
		<meta property="og:image" content={$page.stuff.image} />
		<meta name="twitter:image" content={$page.stuff.image} />
	{/if}
</svelte:head>

<Sidebar />
<TopBar />
<main>
	<slot />
</main>
