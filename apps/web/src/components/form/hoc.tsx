import { clsx } from "clsx";

import type { JSX, ComponentProps } from "preact";

export function withClass<T extends JSX.ElementType>(Component: T, className: string) {
	return (props: ComponentProps<T>) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return <Component {...props} className={clsx(props.class, props.className, className)} />;
	};
}
