import SanityClient from "@sanity/client";

import { SANITY_AUTH_TOKEN, SANITY_DATASET_ID, SANITY_PROJECT_ID } from "./env";

export const sanityClient = SanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET_ID,
	apiVersion: "2022-06-06",
	token: SANITY_AUTH_TOKEN,
	useCdn: false
});
