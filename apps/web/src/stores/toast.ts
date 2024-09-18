import { atom } from "nanostores";

export interface IToast {
	id: string;
	type: "success" | "error";
	content: string;
	timeout?: number;
}

export type IToastArgs = Omit<IToast, "id">;

export const $toasts = atom<IToast[]>([]);

export function toast(args: IToastArgs) {
	const items = $toasts.get();

	$toasts.set([
		...items,
		{
			id: crypto.randomUUID(),
			...args,
		}
	]);
}

export function removeToast(id: string) {
	const items = $toasts.get();

	$toasts.set(items.filter(item => item.id !== id));
}
