import { style } from "@vanilla-extract/css";

import { buttonStyle } from "$stylesheets/global.css";
import { DESKTOP_START_MQ } from "$stylesheets/constants.css";

export const container = style([
	buttonStyle({
		type: "secondary"
	}),
	{
		padding: 0,
		width: "3rem",
		height: "100%",
		fontSize: "1.5rem",
		"@media": {
			[DESKTOP_START_MQ]: {
				display: "none"
			}
		}
	}
]);
