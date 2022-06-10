<script lang="ts">
	import { page } from "$app/stores";
	import Navigation from "$modules/navigation.svelte";
	import "$stylesheets/global.scss";
	import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "$utils/constants/seo";
</script>

<svelte:head>
	<title>{$page.stuff.title || DEFAULT_TITLE}</title>
	<meta name="description" content={$page.stuff.description || DEFAULT_DESCRIPTION} />
</svelte:head>

<Navigation />
<slot />
