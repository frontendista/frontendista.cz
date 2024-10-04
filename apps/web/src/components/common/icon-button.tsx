import { forwardRef } from "preact/compat";
import clsx from "clsx";

import { Icon, type IconProps } from "./icon";

import type { JSX } from "preact";

interface IconButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
	icon: NonNullable<IconProps["icon"]>
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ children, icon, className, ...attrs }, ref) => {
	return (
		<button ref={ref} type="button" className={clsx("p-[0.75rem]", className)} {...attrs}>
			<span className="sr-only">{children}</span>
			<Icon className="h-text w-text" icon={icon} />
		</button>
	)
})
