<script lang="ts">
	import Switch from "$common/switch.svelte";
	import { motionStore } from "$stores/motion-store";
	import { actionButton } from "$modules/top-bar.css";
	import { Popover, PopoverButton, PopoverPanel } from "@rgossiaux/svelte-headlessui";
	import { settingsPanel } from "./settings-button.css";
	import { fade } from "svelte/transition";
	import { buttonStyle } from "$stylesheets/global.css";
	import cx from "clsx";
	import { createNanopop } from "$utils/actions/show-dropdown";

	const [reference, popper] = createNanopop({
		position: "bottom-end",
		margin: 32
	});
</script>

<Popover let:open>
	<PopoverButton
		class={cx(
			buttonStyle({
				type: "secondary"
			}),
			actionButton
		)}
		use={[reference]}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 20 20"
			fill="currentColor"
			style:transition="transform 0.5s"
			style:transform={`rotate(${Number(open) * 360}deg)`}
		>
			<path
				fill-rule="evenodd"
				d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
				clip-rule="evenodd"
			/>
		</svg>
		<span>Settings</span>
	</PopoverButton>
	{#if open}
		<div style:position="fixed" in:fade out:fade use:popper>
			<PopoverPanel class={settingsPanel} static>
				<Switch
					label="REDUCE MOTION"
					checked={$motionStore.value}
					onChange={(e) => motionStore.setPreference(e.detail)}
				/>
			</PopoverPanel>
		</div>
	{/if}
</Popover>
