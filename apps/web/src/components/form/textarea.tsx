import { clsx } from "clsx";
import { forwardRef, useState } from "preact/compat";

import type { JSX } from "preact";

type TextareaProps = JSX.HTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, onInput, ...props }, ref) => {
	const [content, setContent] = useState("");

	const onInputInternal: JSX.InputEventHandler<HTMLTextAreaElement> = (event) => {
		setContent(event.currentTarget.value);

		if (onInput) {
			onInput(event);
		}

		event.currentTarget.style.height = "auto";
		event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
	};

	return (
		<textarea
			ref={ref}
			data-input
			class={clsx("min-h-[20rem] resize-none overflow-y-hidden leading-normal", className)}
			onInput={onInputInternal}
			{...props}
		>
			{content}
		</textarea>
	);
});
