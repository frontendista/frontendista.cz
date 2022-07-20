<script lang="ts">
	import cx from "clsx";

	import ExclamationCircle from "$icons/hi-exclamation-circle.svg";

	import { container, labelText, requiredField, errorField, errorMessage } from "./label.css";

	export let title: string;
	export let error: string | null = null;
	export let required: true | undefined = undefined;

	$: errorId = title + "-error";
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
	class={cx(container, {
		[errorField]: error
	})}
>
	<span class={labelText}>
		<span class={required && requiredField}>{title}</span>
		{#if required}
			<span data-sr="true">(Required)</span>
		{/if}
		{#if error}
			<p class={errorMessage} id={errorId}>
				<svelte:component this={ExclamationCircle} height="1em" />
				{error}
			</p>
		{/if}
	</span>
	<slot
		props={{
			"aria-invalid": error ? true : undefined,
			"aria-describedby": error ? errorId : undefined,
			required
		}}
	/>
</label>
