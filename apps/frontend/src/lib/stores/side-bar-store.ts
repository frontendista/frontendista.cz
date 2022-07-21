import { writable } from "svelte/store";

function createSideBarStore() {
	const { set, subscribe, update } = writable(false);

	return {
		subscribe,
		toggle: () =>
			update(state => {
				document.body.style.overflow = state ? "" : "hidden";
				return !state;
			}),
		close: () => {
			document.body.style.overflow = "";
			set(false);
		}
	};
}

export const isSideBarVisible = createSideBarStore();
