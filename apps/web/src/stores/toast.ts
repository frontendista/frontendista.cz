import { atom } from "nanostores";

export type IToastType = "success" | "error";

export interface IToast {
	id: string;
	type: IToastType;
	content: string;
	duration?: number;
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
