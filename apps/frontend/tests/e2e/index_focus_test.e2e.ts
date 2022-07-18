import { expect, test } from "@playwright/test";

import uaParser from "ua-parser-js";

test.describe("Index Page initial focus state", () => {
	test("should focus skip navigations link on first Tab key", async ({ page }) => {
		await page.goto("/");

		const { os } = uaParser(await page.evaluate(() => navigator.userAgent));

		// NOTE: Currently Firefox and Webkit browsers don't support focus on Anchor elements on MacOS by default.
		if (os.name === "Mac OS") {
			return;
		}

		await page.keyboard.press("Tab");

		const skipNavigationsLink = page.locator("[data-test=skipNavigationsLink] a");

		await expect(skipNavigationsLink).toBeFocused();
	});
});
