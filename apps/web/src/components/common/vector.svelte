<script lang="ts">
	export let viewBox = "0 0 24 24";
	export let title = "";
</script>

<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {viewBox} {...$$restProps}>
	{#if title}
		<title>{title}</title>
	{/if}
	<slot />
</svg>
