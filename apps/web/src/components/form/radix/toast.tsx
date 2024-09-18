import * as ToastPrimitive from "@radix-ui/react-toast";
import { useStore } from "@nanostores/preact";

import { withClass } from "../hoc";
import { $toasts, removeToast, type IToast } from "~/stores/toast";

import type { FunctionComponent } from "preact";

export const Provider = ToastPrimitive.Provider;
export const Viewport = ToastPrimitive.Viewport;

export const Root = withClass(ToastPrimitive.Root, "");
export const Title = withClass(ToastPrimitive.Title, "");
export const Description = withClass(ToastPrimitive.Description, "");
export const Action = withClass(ToastPrimitive.Action, "");
export const Close = withClass(ToastPrimitive.Close, "");

export const Toaster: FunctionComponent = () => {
	const toasts = useStore($toasts);

	return (
		<Provider>
			{toasts.map(props => <Toast key={props.id} {...props} />)}
			<Viewport />
		</Provider>
	);
};

export const Toast: FunctionComponent<IToast> = ({ children, id, type, content }) => {

	const onOpenChange = (open: boolean) => {
		if (!open) {
			removeToast(id);
		}
	};

	return (
		<Root onOpenChange={onOpenChange}>
			{type && <Title>{type}</Title>}
			<Description>{content}</Description>
			{children ? <Action altText="TODO" asChild>{children}</Action> : null}
			<Close aria-label="Close">
				<span aria-hidden>×</span>
			</Close>
		</Root>
	);
};
