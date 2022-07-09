import { browser } from "$app/env";
import { writable, type Readable } from "svelte/store";

const STORAGE_KEY = "data-theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

type ITheme = "light" | "dark";

interface IThemeStore extends Readable<ITheme> {
	toggle: () => void;
}

function isThemeValue(theme: string | null): theme is ITheme {
	return theme === "light" || theme === "dark";
}

function getDefaultTheme(): ITheme {
	if (!browser) {
		return "dark";
	}

	const userPreference = localStorage.getItem(STORAGE_KEY);

	if (isThemeValue(userPreference)) {
		return userPreference;
	}

	return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
}

function createThemeStore(): IThemeStore {
	const { subscribe, update } = writable<ITheme>(getDefaultTheme(), (set) => {
		if (!browser) return;

		const onThemeChange = (e: MediaQueryListEvent) => {
			if (localStorage.getItem(STORAGE_KEY)) return;

			set(e.matches ? "dark" : "light");
		};

		const mediaQueryList = window.matchMedia(MEDIA_QUERY);

		mediaQueryList.addEventListener("change", onThemeChange);

		return () => {
			mediaQueryList.removeEventListener("change", onThemeChange);
		};
	});

	return {
		subscribe,
		toggle: () => {
			update((currentTheme) => {
				const newTheme = currentTheme === "light" ? "dark" : "light";

				localStorage.setItem(STORAGE_KEY, newTheme);
				document.documentElement.setAttribute("data-theme", newTheme);

				return newTheme;
			});
		}
	};
}

export const themeStore = createThemeStore();
