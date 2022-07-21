<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/__types/__layout";

	export const load: Load = async ({ url }) => ({
		props: {
			pathname: url.pathname
		}
	});
</script>

<script lang="ts">
	import "$stylesheets/base/reset.css";
	import "$stylesheets/global.css";

	import { page } from "$app/stores";

	import SkipNavigationLinks from "$components/skip-navigation-links.svelte";
	import PageTransition from "$components/page-transition.svelte";
	import SideBar from "$modules/side-bar.svelte";
	import TopBar from "$modules/top-bar.svelte";

	import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "$root/seo.json";

	export let pathname: string;
</script>

<svelte:head>
	<title>{"frontendista – " + $page.stuff.title || DEFAULT_TITLE}</title>
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

<SkipNavigationLinks />
<TopBar>
	{#if $page.stuff.components && $page.stuff.components.length}
		{#each $page.stuff.components as component}
			<svelte:component this={component} />
		{/each}
	{/if}
</TopBar>
<SideBar />
<PageTransition key={pathname}>
	<slot />
</PageTransition>
