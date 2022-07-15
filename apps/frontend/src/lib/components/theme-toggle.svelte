<script lang="ts">
	import { scale, type ScaleParams } from "svelte/transition";
	import { themeStore } from "$stores/theme-store";
	import { actionButton } from "$modules/top-bar.css";
	import cx from "clsx";
	import { buttonStyle } from "$stylesheets/global.css";

	const iconExitTransition: ScaleParams = {
		duration: 500,
		opacity: 0
	};

	const iconEnterTransition: ScaleParams = {
		delay: iconExitTransition.duration,
		duration: iconExitTransition.duration
	};

	// TODO: Change transition to fade in/out when ReduceMotion is enabled.
</script>

<button
	aria-label={`Switch to ${$themeStore === "dark" ? "light" : "dark"} themes`}
	class={cx(
		buttonStyle({
			type: "secondary"
		}),
		actionButton
	)}
	on:click={themeStore.toggle}
	type="button"
>
	<svg height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		{#if $themeStore === "dark"}
			<path
				in:scale={iconEnterTransition}
				out:scale={iconExitTransition}
				d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
			/>
		{:else}
			<path
				in:scale={iconEnterTransition}
				out:scale={iconExitTransition}
				fill-rule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
				clip-rule="evenodd"
			/>
		{/if}
	</svg>
	<span>Theme</span>
</button>
