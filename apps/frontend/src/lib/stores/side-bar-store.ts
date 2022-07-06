import { writable } from "svelte/store";

function createSideBarStore() {
	const { set, subscribe, update } = writable(false);

	return {
		subscribe,
		toggle: () => update((state) => !state),
		close: () => set(false)
	};
}

export const isSideBarVisible = createSideBarStore();
