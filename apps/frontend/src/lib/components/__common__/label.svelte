<script lang="ts">
	export let title: string;
	export let error: string | null = null;
	export let required: true | undefined = undefined;

	$: errorId = title + "-error";
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
	<span>
		{title}
	</span>
	<slot
		props={{
			"aria-invalid": error ? true : undefined,
			"aria-describedby": error ? errorId : undefined,
			required
		}}
	/>
	{#if error}
		<p id={errorId}>{error}</p>
	{/if}
</label>
