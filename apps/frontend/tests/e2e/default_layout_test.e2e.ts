import { expect, test } from "@playwright/test";

test.describe("Default Layout", () => {
	test("should navigate to Contact page", async ({ page }) => {
		await page.goto("/");

		await expect(page).toHaveURL("/");

		await page.click("text=Contact");

		await expect(page).toHaveURL("/contact");
	});
});
