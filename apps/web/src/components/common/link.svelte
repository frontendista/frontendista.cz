<script lang="ts">
	export let href: string;
	export let disabled = false;
</script>

<a class="link" href={disabled ? undefined : href} role={disabled ? "link" : undefined} aria-disabled={disabled ? "true" : undefined}>
	<slot />
</a>
