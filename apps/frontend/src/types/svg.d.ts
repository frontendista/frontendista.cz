import { SvelteComponentTyped } from "svelte";

export type SVGProps = Partial<svelte.JSX.HTMLProps<SVGElement>>;

export class SVGComponent extends SvelteComponentTyped<SVGProps> {}
