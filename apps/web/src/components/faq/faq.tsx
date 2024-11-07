import { useState } from "preact/compat";
import { Icon } from "../common/icon";
import * as Accordion from "../form/radix/accordion";

import type { ComponentChildren, FunctionComponent } from "preact";
import clsx from "clsx";

export interface FAQItem {
	question: string;
	answer: ComponentChildren
}

export interface FAQAccordionProps {
	items: FAQItem[]
}

export const FAQAccordion: FunctionComponent<FAQAccordionProps> = ({ items }) => {
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
			{items.map((item, i) => {
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

						<Accordion.Content className="data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
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

export interface FAQSectionProps extends FAQAccordionProps {
	title: string
}

export const FAQSection: FunctionComponent<FAQSectionProps> = ({ title, items }) => {
	return (
		<section class="mx-auto max-w-content p-lg lg:px-2xl">
			<h2 class="mb-lg">{title}</h2>
			<FAQAccordion items={items} />
		</section>
	);
};

export const FAQ: FunctionComponent = () => {
	return (
		<>
			<FAQSection title="Background" items={
				[
					{
						question: "How long are you involved in development?",
						answer: "TODO"
					},
					{
						question: "What is your education?",
						answer: "TODO"
					},
					{
						question: "What is your work experience?",
						answer: "TODO"
					},
				]
			} />


			<FAQSection title="Hardware & Software" items={
				[
					{
						question: "What OS are you using?",
						answer: "TODO"
					},
					{
						question: "What IDE are you using?",
						answer: "TODO"
					},
					{
						question: "What desktop hardware are you running on?",
						answer: "TODO"
					},
					{
						question: "What laptop are you running on?",
						answer: "TODO"
					},
					{
						question: "What software have you found useful?",
						answer: "TODO"
					}
				]
			} />

			<FAQSection title="Technologies" items={
				[
					{
						question: "What is your usual front-end techstack?",
						answer: "TODO"
					},
					{
						question: "What is your usual back-end techstack?",
						answer: "TODO"
					},
					{
						question: "What other technologies do you frequently use?",
						answer: "TODO"
					}
				]
			} />
		</>
	);
};
