import * as Tooltip from "@radix-ui/react-tooltip";

import { withClass } from "../hoc";

import type { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

export const Content = withClass(Tooltip.Content, "bg-primary p-lg inline-flex shadow-md text-sm font-bold tooltip-animation z-[51]");
export const Root = Tooltip.Root;
export const Provider = Tooltip.Provider;
export const Trigger = Tooltip.Trigger;
export const Portal = Tooltip.Portal;
export const Arrow = Tooltip.Arrow;

interface TextTooltipProps extends Tooltip.TooltipContentProps {
	text: string;
	/**
	 * @default true
	 */
	show?: boolean;
}

export const TextTooltip: FunctionComponent<TextTooltipProps> = ({ children, show = true, text, ...props }) => {
	const [isOpen, setOpened] = useState(false);

	if (!show) {
		return <>{children}</>;
	}

	return (
		<Provider>
			<Root open={isOpen} onOpenChange={setOpened} delayDuration={0}>
				<Trigger asChild>
					{children}
				</Trigger>
				
				<Portal>
					<Content sideOffset={4} {...props}>
						{text}
						<Arrow className="fill-primary" />
					</Content>
				</Portal>
			</Root>
		</Provider>
	);
};
