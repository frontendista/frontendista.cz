<script lang="ts">
	import { buttonStyle } from "$stylesheets/global.css";

	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from "@rgossiaux/svelte-headlessui";
	import { dialogContainer, diaologOverlay } from "./reset-form-dialog.css";

	export let isOpened = false;

	function closeDialog() {
		isOpened = false;
	}
</script>

<Dialog class={dialogContainer} open={isOpened} on:close={closeDialog}>
	<DialogOverlay class={diaologOverlay} />

	<div>
		<DialogTitle>Reset form</DialogTitle>
		<DialogDescription>This will irreversibly reset the form</DialogDescription>

		<button class={buttonStyle()} type="button" on:click={closeDialog}>Cancel</button>
		<button class={buttonStyle()} type="reset" on:click={closeDialog}>Reset</button>
	</div>
</Dialog>
