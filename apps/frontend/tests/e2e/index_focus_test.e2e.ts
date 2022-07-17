import { expect, test } from "@playwright/test";

test.describe("Index Page initial focus state", () => {
	test("should focus skip navigations link on first Tab key", async ({ page }) => {
		await page.goto("/");

		await page.keyboard.press("Tab");

		const skipNavigationsLink = page.locator("[data-test=skipNavigationsLink] a");

		await expect(skipNavigationsLink).toBeFocused();
	});
});
