import { clsx } from "clsx";
import { forwardRef, useMemo, useState } from "preact/compat";

import { Icon } from "../common/icon";

import type { JSX } from "preact";

interface TextareaProps extends JSX.HTMLAttributes<HTMLTextAreaElement> {
	topText?: string;
	bottomText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, onInput, topText, bottomText, maxLength, ...props }, ref) => {
	const [content, setContent] = useState("");

	const onInputInternal: JSX.InputEventHandler<HTMLTextAreaElement> = (event) => {
		setContent(event.currentTarget.value);

		if (onInput) {
			onInput(event);
		}

		event.currentTarget.style.height = "auto";
		event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
	};

	const [remainingCharacters, remainingPercentage] = useMemo(() => {
		if (typeof maxLength === "number") {
			return [maxLength - content.length, (1 - content.length / maxLength).round()];
		}

		return [null, null];
	}, [maxLength, content]);

	return (
		<div className="relative">
			<textarea
				ref={ref}
				data-input
				className={
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
				maxLength={maxLength}
				{...props}
			/>

			{topText ? (
				<span className="absolute left-xl top-xl select-none text-secondary" aria-hidden="true">
					{topText}
				</span>
			) : null}

			{bottomText ? (
				<span className="absolute bottom-xl left-xl select-none text-secondary" aria-hidden="true">
					{bottomText}
				</span>
			) : null}

			{remainingCharacters !== null ? (
				<span
					className={
						clsx(
							"absolute right-xl top-xl flex items-center gap-md font-mono text-sm nojs:hidden",
							{
								"night:text-ok-500 text-ok-800": remainingPercentage !== null && remainingPercentage > 0.50,
								"text-warning-600": remainingPercentage !== null && remainingPercentage.isBetween(0.25, 0.50),
								"text-error-600": remainingPercentage !== null && remainingPercentage < 0.25,
							}
						)
					}
					aria-hidden="true"
				>
					<span>{(remainingCharacters).toString().padStart(maxLength!.toString().length, "0")}</span>
					<span class="sr-only">characters remaining</span>
					<Icon icon="keyboard" title={`${remainingCharacters} characters remaining`} height="1em" />
				</span>
			) : null}
		</div>
	);
});
