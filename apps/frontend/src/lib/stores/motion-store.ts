import { browser } from "$app/env";
import { writable, type Readable } from "svelte/store";

const MEDIA_QUERY = "(prefers-reduced-motion: reduce)";
const STORAGE_KEY = "reduce-motion";

type IMotionStoreSource = "USER" | "SYSTEM";

interface IMotionStoreValue {
	value: boolean;
	source: IMotionStoreSource;
}

interface IMotionStore extends Readable<IMotionStoreValue> {
	setPreference: (value: boolean) => void;
	clearPreference: () => void;
}

function getMotionPreference(): IMotionStoreValue {
	if (!browser) {
		return {
			source: "SYSTEM",
			value: false
		};
	}

	const userPreference = localStorage.getItem(STORAGE_KEY);

	if (userPreference) {
		return {
			source: "USER",
			value: !!Number(userPreference)
		};
	}

	return {
		source: "SYSTEM",
		value: window.matchMedia(MEDIA_QUERY).matches
	};
}

function createMotionStore(): IMotionStore {
	const { subscribe, set } = writable(getMotionPreference(), set => {
		if (!browser) return;

		const onReduceMotionChange = (e: MediaQueryListEvent) => {
			if (localStorage.getItem(STORAGE_KEY)) return;

			set({
				source: "SYSTEM",
				value: e.matches
			});
		};

		const mediaQueryList = window.matchMedia(MEDIA_QUERY);

		mediaQueryList.addEventListener("change", onReduceMotionChange);

		return () => {
			mediaQueryList.removeEventListener("change", onReduceMotionChange);
		};
	});

	return {
		subscribe,
		setPreference: reduceMotion => {
			localStorage.setItem(STORAGE_KEY, reduceMotion ? "1" : "0");
			set({ source: "USER", value: reduceMotion });
		},
		clearPreference: () => {
			localStorage.removeItem(STORAGE_KEY);
			set({ source: "SYSTEM", value: window.matchMedia(MEDIA_QUERY).matches });
		}
	};
}

export const motionStore = createMotionStore();
