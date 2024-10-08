export type UmamiEvents =
	"contact-form-error" |
	"verify-error" |
	"verify-attempt" |
	"contact-dialog-closed-without-download"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function track(event_name: UmamiEvents, event_data?: Record<string, any>) {
	if ("umami" in window) {
		try {
			umami.track(event_name, event_data);
		} catch (error) {
			console.error(error);
		}
	}
};
