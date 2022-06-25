<script lang="ts">
	import { container, favicon, link, linkText } from "./side-bar-item.css";
	import HiExternalLink from "$icons/hi-external-link.svg";

	export let href: string;
	export let icon: any = null;

	$: isExternal = href.startsWith("http");
</script>

<li class={container}>
	<a class={link} {href}>
		{#if icon}
			<svelte:component this={icon} height="1em" />
		{:else if isExternal}
			<img src={`https://www.google.com/s2/favicons?domain=${href}&sz=32`} alt="" class={favicon} />
		{/if}
		<span class={linkText}>
			<slot />
		</span>
		{#if isExternal}
			<svelte:component this={HiExternalLink} height="1em" />
		{/if}
	</a>
</li>
