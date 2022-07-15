import { style } from "@vanilla-extract/css";

import { buttonStyle } from "$stylesheets/global.css";

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
			"(min-width: 768px)": {
				display: "none"
			}
		}
	}
]);
