<script lang="ts">
	import cx from "clsx";
	import { container, remainingCharacters, remainingRed, remainingYellow } from "./textarea.css";

	export let name: string;
	export let placeholder = "";
	export let onChange: ((e: Event) => void) | null = null;
	export let onBlur: ((e: Event) => void) | null = null;
	export let onInput: ((e: Event) => void) | null = null;
	export let maxLength: number | null = null;
	export let rows = 5;
	export let outsideProps: Record<string, unknown> = {};
	export let value: string;
</script>

<textarea
	class={container}
	bind:value
	on:change={onChange}
	on:input={onInput}
	on:blur={onBlur}
	{name}
	{placeholder}
	{maxLength}
	{rows}
	{...outsideProps}
/>
{#if maxLength != null}
	{@const ratio = value.length / maxLength}
	<span
		class={cx(remainingCharacters, {
			[remainingYellow]: ratio > 0.5 && ratio <= 0.9,
			[remainingRed]: ratio > 0.9
		})}>{(maxLength - value.length).toString().padStart(3, "0")} characters left</span
	>
{/if}
