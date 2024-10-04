import type { FunctionComponent } from "preact";
import type { SVGAttributes } from "preact/compat";

export interface IconProps extends SVGAttributes {
	icon?: string;
	title?: string;
}

export const Icon: FunctionComponent<IconProps> = ({ icon, viewBox = "0 0 24 24", title, children, ...attrs }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={viewBox} aria-hidden="true" {...attrs}>
			{title ? <title>{title}</title> : null}
			{icon ? <use href={`#${icon}`} /> : children}
		</svg>
	);
};
