import { test } from "@playwright/test";

test.describe("Example", () => {
	test("Visit /", async ({ page }) => {
		await page.goto("/");
	});
});
