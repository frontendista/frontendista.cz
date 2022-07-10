<script lang="ts">
	import { Switch, SwitchLabel, SwitchGroup } from "@rgossiaux/svelte-headlessui";
	import cx from "clsx";
	import {
		switchComponent,
		switchKnob,
		switchEnabled,
		switchContaniner,
		switchLabel
	} from "$common/switch.css";

	export let checked = false;
	export let label = "";
	export let onChange: (e: CustomEvent<boolean>) => void;
</script>

<SwitchGroup class={switchContaniner}>
	{#if label}
		<SwitchLabel class={switchLabel}>{label}</SwitchLabel>
	{/if}
	<Switch
		class={cx(switchComponent, {
			[switchEnabled]: checked
		})}
		on:change={onChange}
		{checked}
	>
		<span class={switchKnob} />
	</Switch>
</SwitchGroup>
