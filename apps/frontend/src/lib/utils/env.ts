import "dotenv/config";

(function () {
	const requiredVars = ["SANITY_AUTH_TOKEN", "SANITY_DATASET_ID", "SANITY_PROJECT_ID"];

	requiredVars.reduce((hasFailed, variable) => {
		const isMissing = !process.env[variable];

		isMissing ? console.error(`'${variable}' is required`) : console.info(`'${variable}' found.`);

		return hasFailed || isMissing;
	}, false) && process.exit(1);
})();

export const SANITY_AUTH_TOKEN = process.env.SANITY_AUTH_TOKEN;
export const SANITY_DATASET_ID = process.env.SANITY_DATASET_ID;
export const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
