import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./src/schemas/schema";

export default createConfig({
	name: "cms.frontendista.cz",
	title: "Frontendista CMS",
	projectId: "rmt1xhym",
	dataset: import.meta.env.PROD ? "production" : "staging",
	plugins: [deskTool()],
	schema: {
		types: schemaTypes
	}
});
