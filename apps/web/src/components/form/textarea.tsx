import { clsx } from "clsx";
import { forwardRef, useState } from "preact/compat";

import type { JSX } from "preact";

interface TextareaProps extends JSX.HTMLAttributes<HTMLTextAreaElement> {
	topText?: string;
	bottomText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, onInput, topText, bottomText, ...props }, ref) => {
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
		<div className="relative">
			<textarea
				ref={ref}
				data-input
				class={
					clsx(
						"min-h-[20rem] resize-none overflow-y-hidden leading-normal",
						{
							"pt-[4.5rem]": Boolean(topText),
							"pb-[4.5rem]": Boolean(bottomText)
						},
						className
					)
				}
				onInput={onInputInternal}
				children={content}
				{...props}
			/>
			{topText ? <span className="absolute left-xl top-xl z-50 text-secondary" aria-hidden="true">{topText}</span> : null}
			{bottomText ? <span className="absolute bottom-xl left-xl z-50 text-secondary" aria-hidden="true">{bottomText}</span> : null}
		</div>
	);
});
