import * as ToastPrimitive from "@radix-ui/react-toast";
import { useStore } from "@nanostores/preact";
import { useEffect, useRef } from "preact/hooks";

import { $toasts, removeToast, type IToast } from "~/stores/toast";

import { withClass } from "../hoc";

import type { FunctionComponent } from "preact";

export const Provider = ToastPrimitive.Provider;

export const Viewport = withClass(ToastPrimitive.Viewport, "fixed bottom-0 right-0 flex flex-col gap-lg p-2lg w-full max-w-[32rem] z-[2147483647]");
export const Root = withClass(ToastPrimitive.Root, "bg-white p-2lg relative");
export const Title = withClass(ToastPrimitive.Title, "mb-md font-bold text-black text-base");
export const Description = withClass(ToastPrimitive.Description, "text-black text-sm");
export const Action = withClass(ToastPrimitive.Action, "");
export const Close = withClass(ToastPrimitive.Close, "");

// TODO: Swipe

export const Toaster: FunctionComponent = () => {
	const toasts = useStore($toasts);

	return (
		<Provider duration={5000}>
			{toasts.map(props => <Toast key={props.id} {...props} />)}
			<Viewport />
		</Provider>
	);
};

export const Toast: FunctionComponent<IToast> = ({ id, type, content, duration = 5000 }) => {
	const progress = useRef<HTMLDivElement | null>(null);
	const animation = useRef<Animation | null>(null);

	useEffect(() => {
		if (!progress.current) {
			return;
		}

		animation.current = progress.current.animate(
			[{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
			{
				duration,
				fill: "forwards",
				easing: "linear"
			}
		);

		animation.current.onfinish = () => {
			removeToast(id);
		};

		animation.current.oncancel = () => {
			removeToast(id);
		};

		animation.current.play();

		return () => {
			if (animation.current) {
				animation.current.cancel();
			}
		};
	}, [id, duration]);

	const onPause = () => {
		if (animation.current) {
			animation.current.pause();
		}
	};

	const onResume = () => {
		if (animation.current) {
			animation.current.play();
		}
	};

	return (
		<Root open onPause={onPause} onResume={onResume} duration={duration}>
			<div ref={progress} className="absolute inset-0 z-40 origin-left bg-red-500" />
			<div className="relative z-50">
				{type && <Title>{type}</Title>}
				<Description>{content}</Description>
			</div>
		</Root>
	);
};
