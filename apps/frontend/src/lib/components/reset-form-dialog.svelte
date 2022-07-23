<script lang="ts">
	import { buttonStyle } from "$stylesheets/global.css";

	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from "@rgossiaux/svelte-headlessui";
	import { dialogContainer, dialogOverlay, dialogWrapper } from "./reset-form-dialog.css";

	export let isOpened = false;
	export let onConfirm: () => void;

	function closeDialog() {
		isOpened = false;
	}

	function handleOnConfirm() {
		onConfirm();
		closeDialog();
	}
</script>

<Dialog class={dialogContainer} open={isOpened} on:close={closeDialog}>
	<div class={dialogWrapper}>
		<DialogTitle>Reset form</DialogTitle>
		<DialogDescription>This will irreversibly reset the form</DialogDescription>

		<button class={buttonStyle()} type="button" on:click={closeDialog}>Cancel</button>
		<button class={buttonStyle()} type="reset" on:click={handleOnConfirm}>Reset</button>
	</div>
	<DialogOverlay class={dialogOverlay} />
</Dialog>
