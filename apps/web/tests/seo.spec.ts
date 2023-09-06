import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
	test("should have canonical URL", async ({ page }) => {
		await page.goto("/");

		const canonical = await page.getAttribute("link[rel='canonical']", "href");
		const ogCanonical = await page.getAttribute("meta[property='og:url']", "content");

		expect(canonical).toBe("https://frontendista.cz/");
		expect(ogCanonical).toBe("https://frontendista.cz/");
	});

	test("404 page should have no canonical URL", async ({ page }) => {
		await page.goto("/this-is/a-page/that-surely/does-not-exist");

		const canonicalTag = await page.$("link[rel='canonical']");
		const ogCanonical = await page.$("meta[property='og:url']");

		expect(canonicalTag).toBeFalsy();
		expect(ogCanonical).toBeFalsy();
	});
});
