<script lang="ts">
	import { container, favicon, link, linkText } from "./side-bar-item.css";
	import HiExternalLink from "$icons/hi-external-link.svg?component";
	import HiChevronLeft from "$icons/hi-chevron-left.svg?component";

	export let href: string;
	export let icon: any = null;
	export let isActive = false;

	$: isExternal = href.startsWith("http");
</script>

<li class={container}>
	<a
		sveltekit:prefetch={!isExternal || null}
		class={link}
		{href}
		aria-current={isActive ? "true" : null}
	>
		{#if icon}
			<svelte:component this={icon} />
		{:else if isExternal}
			<img
				src={`https://www.google.com/s2/favicons?domain=${href}&sz=32`}
				height="16"
				width="16"
				alt=""
				class={favicon}
			/>
		{/if}
		<span class={linkText}>
			<slot />
		</span>
		{#if isExternal}
			<HiExternalLink />
		{:else if isActive}
			<HiChevronLeft />
		{/if}
	</a>
</li>
