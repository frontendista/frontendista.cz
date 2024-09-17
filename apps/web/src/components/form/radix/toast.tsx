import * as ToastPrimitive from "@radix-ui/react-toast";

import { withClass } from "../hoc";

import type { FunctionComponent } from "preact";

export const Provider = ToastPrimitive.Provider;
export const Viewport = ToastPrimitive.Viewport;

export const Root = withClass(ToastPrimitive.Root, "");
export const Title = withClass(ToastPrimitive.Title, "");
export const Description = withClass(ToastPrimitive.Description, "");
export const Action = withClass(ToastPrimitive.Action, "");
export const Close = withClass(ToastPrimitive.Close, "");

interface ToastProps {
	title?: string;
	content: string;
}

export const Toast: FunctionComponent<ToastProps> = ({ children, title, content }) => {
	return (
		<Root>
			{title && <Title>{title}</Title>}
			<Description>{content}</Description>
			{children ? <Action altText="TODO" asChild>{children}</Action> : null}
			<Close aria-label="Close">
				<span aria-hidden>×</span>
			</Close>
		</Root>
	);
};
