export class DiscordWebhookError extends Error {
	constructor(response: Response) {
		super();

		this.name = "DiscordWebhookError";

		switch (response.status.toString().charAt(0)) {
			case "4":
				this.message = "Malformed Discord webhook request.";
				break;
			case "5":
				this.message = "Discord webhook is unavailable.";
				break;
			default:
				this.message = "Unknown Discord webhook error.";
				break;
		}
	}
}
