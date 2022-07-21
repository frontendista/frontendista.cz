<script lang="ts">
	// TODO: Loading state in button after submit
	// TODO: Overall submit count
	// TODO: Handle successful submit
	// N2H: Disable all fields while loading

	import { createForm } from "svelte-forms-lib";
	import { buttonStyle } from "$stylesheets/global.css";
	import { container, formButtonGroup, formError } from "./contact-form.css";
	import Label from "$common/label.svelte";
	import Textarea from "$common/textarea.svelte";
	import Send from "$icons/send.svg";
	import HiTrash from "$icons/hi-trash.svg";
	import { emailRegex } from "$utils/regex";
	import { sendDiscordMessage, type IContactFormData } from "$utils/api";
	import { goto } from "$app/navigation";

	function validate({ email, firstname, message }: IContactFormData) {
		const errors: Partial<IContactFormData> = {};

		if (!message) {
			errors.message = "is required";
		} else if (message.trim().length < 10) {
			errors.message = "is too short";
		}

		if (email) {
			if (!emailRegex.test(email)) {
				errors.email = "is invalid";
			}
		}

		if (firstname) {
			if (firstname.trim().length < 2) {
				errors.firstname = "is too short";
			}

			if (firstname.trim().length > 50) {
				errors.firstname = "is too long";
			}
		}

		return errors;
	}

	async function onSubmit(data: IContactFormData) {
		formLevelError = null;
		formLevelError = await sendDiscordMessage(data);

		if (!formLevelError) {
			goto("/contact/success");
		}
	}

	const { handleChange, handleSubmit, errors, handleReset, form } = createForm<IContactFormData>({
		onSubmit,
		validate,
		initialValues: {
			message: "",
			firstname: "",
			email: ""
		}
	});

	let formLevelError: string | null = null;
</script>

<form novalidate class={container} on:submit={handleSubmit}>
	<div role="alert" aria-atomic="true" data-sr={!formLevelError} class={formError}>
		{#if formLevelError}
			<span>Message couldn't be delivered.</span>
			<p>{formLevelError}</p>
		{/if}
	</div>
	<Label title="First name" error={$errors.firstname} let:props>
		<input name="firstname" placeholder="Walter" type="text" {...props} on:change={handleChange} />
	</Label>
	<Label title="Email" error={$errors.email} let:props>
		<input
			name="email"
			placeholder="walter@white.com"
			type="email"
			{...props}
			on:change={handleChange}
		/>
	</Label>
	<Label title="Message" error={$errors.message} required let:props>
		<Textarea
			value={$form.message}
			name="message"
			placeholder="I'm not in danger, Skyler. I'm the danger."
			maxLength={255}
			rows={10}
			outsideProps={props}
			onChange={handleChange}
		/>
	</Label>
	<div class={formButtonGroup}>
		<button
			class={buttonStyle({
				size: "large"
			})}
			type="submit"
		>
			SEND
			<svelte:component this={Send} height="0.75em" />
		</button>
		<button
			class={buttonStyle({
				type: "secondary",
				size: "large"
			})}
			type="reset"
			on:click={handleReset}
		>
			Reset
			<svelte:component this={HiTrash} height="1em" />
		</button>
	</div>
</form>
