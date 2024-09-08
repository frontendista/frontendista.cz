import { forwardRef } from "preact/compat";
import { clsx } from "clsx";

import type { JSX, ComponentProps } from "preact";

export function withClass<T extends JSX.ElementType, Y extends HTMLElement>(Component: T, className: string) {
	return forwardRef<Y, ComponentProps<T>>((props, ref) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return <Component {...props} ref={ref} className={clsx(props.class, props.className, className)} />;
	});
}
