export interface IContactFormData {
	firstname: string;
	email: string;
	message: string;
}

export async function sendDiscordMessage(data: IContactFormData): Promise<string | null> {
	try {
		const response = await fetch(import.meta.env.VITE_API_URL + "/contact/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
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
