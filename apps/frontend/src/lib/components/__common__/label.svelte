<script lang="ts">
	import cx from "clsx";

	import { container, labelText, requiredField } from "./label.css";

	export let title: string;
	export let error: string | null = null;
	export let required: true | undefined = undefined;

	$: errorId = title + "-error";
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={container}>
	<span
		class={cx(labelText, {
			[requiredField]: required
		})}
	>
		{title}
		{#if required}
			<span data-sr>(Required)</span>
		{/if}
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
