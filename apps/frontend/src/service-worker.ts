// TODO: Re-check before releasing 1.0.0

import { version } from "$service-worker";

self.addEventListener("install", e => {
	console.log("Installed: ", e);
	console.log("Version: ", version);
});

self.addEventListener("activate", e => {
	console.log("Activated: ", e);
});

self.addEventListener("event", e => {
	console.log("Event: ", e);
});
