import { actionButton } from "$modules/top-bar.css";
import { style } from "@vanilla-extract/css";

export const container = style([
	actionButton,
	{
		padding: 0,
		width: "3rem",
		fontSize: "1.5rem",
		"@media": {
			"(min-width: 768px)": {
				display: "none"
			}
		}
	}
]);
