import type { LoadEvent } from "@sveltejs/kit";

export interface IContactFormData {
	firstname: string;
	email: string;
	message: string;
}

/**
 * Sends a message through Cloudflare worker that triggers Webhook channel request.
 *
 * @returns string with error or null if successful
 */
export async function sendDiscordMessage(data: IContactFormData): Promise<string | null> {
	try {
		const response = await fetch(import.meta.env.VITE_API_URL + "/contact/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify({
				name: data.firstname || null,
				email: data.email || null,
				message: data.message
			})
		});

		if (response.ok) {
			return null;
		}

		return response.text();
	} catch (error) {
		return "This looks phishy, or you don't have a network connection. Please try again later.";
	}
}

export async function getMessageCount(fetchFn: LoadEvent["fetch"]): Promise<number> {
	try {
		const response = await fetchFn(import.meta.env.VITE_API_URL + "/contact/count");

		if (response.ok) {
			const { value } = await response.json();

			if (typeof value !== "number") {
				throw new Error("Invalid response value");
			}

			return value;
		}

		return 0;
	} catch (error) {
		return 0;
	}
}
