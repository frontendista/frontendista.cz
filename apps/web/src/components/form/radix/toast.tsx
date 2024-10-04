import * as ToastPrimitive from "@radix-ui/react-toast";
import { useStore } from "@nanostores/preact";
import { useEffect, useRef } from "preact/hooks";
import clsx from "clsx";

import { $toasts, removeToast, type IToast, type IToastType } from "~/stores/toast";

import { withClass } from "../hoc";

import type { FunctionComponent } from "preact";
import { Icon } from "../../common/icon";

export const Provider = ToastPrimitive.Provider;

export const Viewport = withClass(ToastPrimitive.Viewport, "fixed bottom-0 right-0 flex flex-col gap-lg p-2lg w-full max-w-[32rem] z-[2147483647]");
export const Root = withClass(ToastPrimitive.Root, "bg-secondary p-2lg relative shadow-lg border-t-[3px] animate-slide-in");
export const Title = withClass(ToastPrimitive.Title, "mb-md font-bold text-current text-base capitalize inline-flex gap-md items-center");
export const Description = withClass(ToastPrimitive.Description, "text-primary text-sm font-medium");
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

const icon_map: Record<IToastType, string> = {
	success: "circle-check",
	error: "circle-x"
};

export const Toast: FunctionComponent<IToast> = ({ id, type, content, duration = 5000 }) => {
	const root = useRef<HTMLDivElement | null>(null);
	const progress = useRef<HTMLDivElement | null>(null);
	const animation = useRef<Animation | null>(null);

	const triggerClose = () => {
		if (root.current) {
			const animation = root.current.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 200,
				fill: "forwards",
				easing: "ease-in-out"
			});
			
			animation.play();
			animation.onfinish = () => removeToast(id);
		}
	};

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

		animation.current.play();
		animation.current.onfinish = triggerClose;
		animation.current.oncancel = triggerClose;

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
		<Root ref={root} open onPause={onPause} onResume={onResume} duration={duration} className={clsx({
			"border-error-600 text-error-600": type === "error",
			"border-ok-500 text-ok-500": type === "success"
		})}>
			<div className="relative z-50">
				<Title>
					<Icon icon={icon_map[type]} className="size-text stroke-[3]" />
					{type}
				</Title>
				<Description asChild>
					<p>{content}</p>
				</Description>
			</div>
			<div aria-hidden="true" ref={progress} className="absolute inset-0 z-40 origin-left bg-black/25" />
		</Root>
	);
};
