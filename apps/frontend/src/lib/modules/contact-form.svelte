<script lang="ts">
	// TODO: Form Level Error
	// TODO: Loading state in button after submit
	// TODO: Overall submit count
	// N2H: Disable all fields while loading

	import { createForm } from "svelte-forms-lib";
	import { buttonStyle } from "$stylesheets/global.css";
	import { container, formButtonGroup } from "./contact-form.css";
	import Label from "$common/label.svelte";
	import Textarea from "$common/textarea.svelte";
	import Send from "$icons/send.svg";
	import { emailRegex } from "$utils/regex";

	interface IContactFormData {
		firstname: string;
		email: string;
		message: string;
	}

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
		await new Promise(resolve => setTimeout(resolve, 2500));
		console.log({ data, url: import.meta.env.VITE_API_URL });
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
</script>

<form novalidate class={container} on:submit={handleSubmit}>
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
				type: "secondary",
				size: "large"
			})}
			type="reset"
			on:click={handleReset}
		>
			Reset
		</button>
		<button
			class={buttonStyle({
				size: "large"
			})}
			type="submit"
		>
			SEND
			<svelte:component this={Send} height="1em" />
		</button>
	</div>
</form>
