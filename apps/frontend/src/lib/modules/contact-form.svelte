<script lang="ts">
	// TODO: Loading state in button after submit
	// TODO: Handle successful submit
	// N2H: Disable all fields while loading

	import { createForm } from "svelte-forms-lib";
	import { buttonStyle } from "$stylesheets/global.css";
	import { container, formButtonGroup, formError } from "./contact-form.css";
	import Label from "$common/label.svelte";
	import Textarea from "$common/textarea.svelte";
	import Send from "$icons/other/send.svg?component";
	import HiTrash from "$icons/hi/20/trash.svg?component";
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
		} else {
			if (!formElement) return;

			scrollTo({
				left: window.scrollX,
				top: formElement.getBoundingClientRect().top + window.pageYOffset - 100,
				behavior: "smooth"
			});
		}
	}

	const { handleSubmit, errors, handleReset, form, touched, validateField, updateTouched } =
		createForm<IContactFormData>({
			onSubmit,
			validate,
			initialValues: {
				message: "",
				firstname: "",
				email: ""
			}
		});

	function handleInput(e: Event) {
		const field = (e.target as HTMLInputElement).name as keyof IContactFormData;

		if ($touched[field]) {
			validateField(field);
		}
	}

	function handleBlur(e: Event) {
		const field = (e.target as HTMLInputElement).name as keyof IContactFormData;

		updateTouched(field, true);
		validateField(field);
	}

	let formLevelError: string | null = null;
	let formElement: HTMLFormElement | null = null;
</script>

<form bind:this={formElement} novalidate class={container} on:submit={handleSubmit}>
	<div role="alert" aria-atomic="true" data-sr={!formLevelError} class={formError}>
		{#if formLevelError}
			<span>Message couldn't be delivered.</span>
			<p>{formLevelError}</p>
		{/if}
	</div>
	<Label title="First name" error={$touched.firstname && $errors.firstname} let:props>
		<input
			name="firstname"
			placeholder="Walter"
			type="text"
			{...props}
			bind:value={$form.firstname}
			on:input={handleInput}
			on:blur={handleBlur}
		/>
	</Label>
	<Label title="Email" error={$touched.email && $errors.email} let:props>
		<input
			name="email"
			placeholder="walter@white.com"
			type="email"
			{...props}
			bind:value={$form.email}
			on:input={handleInput}
			on:blur={handleBlur}
		/>
	</Label>
	<Label title="Message" error={$touched.message && $errors.message} required let:props>
		<Textarea
			bind:value={$form.message}
			onInput={handleInput}
			onBlur={handleBlur}
			name="message"
			placeholder="I'm not in danger, Skyler. I'm the danger."
			maxLength={255}
			rows={10}
			outsideProps={props}
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
			<Send />
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
			<HiTrash />
		</button>
	</div>
</form>
