<script lang="ts">
	import { fly, type FlyParams } from "svelte/transition";

	import { container, digitContainer, digitWrapper, innerContainer } from "./digit-counter.css";

	export let value: number;
	/**
	 * If value prop digit count is less than minimal it's padded from left to required count.
	 */
	export let minimalDigitCount = 6;

	const transitionOut: FlyParams = {
		y: 128,
		duration: 500
	};

	const transitionIn: FlyParams = {
		y: -128,
		delay: 250,
		duration: transitionOut.duration
	};

	$: display = Array.from(value.toString().padStart(minimalDigitCount, "0"));
	$: firstNonZeroDigit = display.findIndex(digit => digit !== "0");
</script>

<div class={container}>
	<div class={innerContainer} aria-hidden="true">
		{#each display as digit, index}
			<div
				class={digitContainer({
					isZero: firstNonZeroDigit === -1 || index < firstNonZeroDigit
				})}
			>
				{#key digit}
					<span class={digitWrapper} in:fly={transitionIn} out:fly={transitionOut}>
						{digit}
					</span>
				{/key}
			</div>
		{/each}
	</div>
	<slot />
</div>
