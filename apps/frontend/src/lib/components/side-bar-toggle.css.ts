import { style } from "@vanilla-extract/css";

import { buttonStyle } from "$stylesheets/global.css";
import { DESKTOP_START_MQ } from "$stylesheets/constants.css";

export const container = style([
	buttonStyle({
		type: "secondary",
		square: true,
		size: "large"
	}),
	{
		fontSize: "1.5rem !important",
		"@media": {
			[DESKTOP_START_MQ]: {
				display: "none !important"
			}
		}
	}
]);
