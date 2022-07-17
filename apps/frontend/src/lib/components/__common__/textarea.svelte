<script lang="ts">
	import cx from "clsx";
	import { container, remainingCharacters, remainingRed, remainingYellow } from "./textarea.css";

	export let name: string;
	export let placeholder: string = "";
	export let onChange: (e: Event) => any;
	export let maxLength: number | null = null;
	export let rows: number = 5;
	export let outsideProps: any = {};
	export let value: string;
</script>

<textarea
	class={container}
	bind:value
	on:change={onChange}
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
