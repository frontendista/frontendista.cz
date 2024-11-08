import clsx from "clsx";
import { useState } from "preact/compat";
import { Icon } from "../common/icon";
import * as Accordion from "../form/radix/accordion";
import { faq } from "../../config";

import type { ComponentChildren, FunctionComponent } from "preact";

export interface FAQItem {
	question: string;
	answer: ComponentChildren
}

export type FAQCategories = "background" | "hardware-software" | "technologies"

export interface FAQAccordionProps {
	category: FAQCategories
}

export const FAQAccordion: FunctionComponent<FAQAccordionProps> = ({ category }) => {
	const [selectedQuestion, setSelectedQuestion] = useState<string>("");

	return (
		<Accordion.Root
			value={selectedQuestion}
			onValueChange={setSelectedQuestion}
			type="single"
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			collapsible
		>
			{faq[category].map((item, i) => {
				const isOpened = selectedQuestion === String(i);

				return (
					<Accordion.Item key={i} value={String(i)}>
						<Accordion.Header>
							<Accordion.Trigger className={clsx("items-start normal-case", {
								["bg-fg/90"]: i % 2 === 0,
							})} data-btn="primary">
								{item.question}
								<Icon class="shrink-0" title="Toggle disclosure" icon={isOpened ? "minus-square" : "plus-square"} />
							</Accordion.Trigger>
						</Accordion.Header>

						<Accordion.Content className="motion:data-[state=closed]:animate-slide-up motion:data-[state=open]:animate-slide-down">
							<div className="p-xl">
								{item.answer}
							</div>
						</Accordion.Content>
					</Accordion.Item>
				);
			})}
		</Accordion.Root>
	);
};
