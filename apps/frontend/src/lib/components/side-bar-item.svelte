<script lang="ts">
	import { container, link, linkText } from "./side-bar-item.css";
	import HiExternalLink from "$icons/hi-external-link.svg";

	export let href: string;
	export let icon: any = null;

	$: isExternal = href.startsWith("http");
</script>

<li class={container}>
	<a class={link} {href}>
		{#if icon}
			<svelte:component this={icon} height="1em" />
		{/if}
		<span class={linkText}>
			<slot />
		</span>
		{#if isExternal}
			<svelte:component this={HiExternalLink} height="1em" />
		{/if}
	</a>
</li>
