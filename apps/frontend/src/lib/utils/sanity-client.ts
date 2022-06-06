import SanityClient from "@sanity/client";

export const sanityClient = SanityClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET_ID,
	apiVersion: "2022-06-06",
	token: process.env.SANITY_AUTH_TOKEN,
	useCdn: false
});
