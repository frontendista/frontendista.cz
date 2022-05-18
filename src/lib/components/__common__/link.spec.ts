import Link from "./link.svelte";

import { render } from "@testing-library/svelte";

describe("Settings Component", () => {
	it("should render", () => {
		const { queryByText } = render(Link, {
			props: {
				href: "https://seznam.cz"
			}
		});
		expect(queryByText("seznam.cz")).toBeDefined();
	});

	it("should render backup text for external link when slot is not passed", () => {
		const { queryByText } = render(Link, {
			props: {
				href: "https://seznam.cz"
			}
		});

		expect(queryByText("seznam.cz")).toBeDefined();
	});

	it("should render backup text for internal link when slot is not passed", () => {
		const { queryByText } = render(Link, {
			props: {
				href: "/about"
			}
		});

		expect(queryByText("/about")).toBeDefined();
	});

	it("should render icon when external link is passed", () => {
		const { queryByAltText } = render(Link, {
			props: {
				href: "https://seznam.cz"
			}
		});

		expect(queryByAltText("")).toBeDefined();
	});

	it("should NOT render icon when internal link is passed", () => {
		const { queryByAltText } = render(Link, {
			props: {
				href: "/about"
			}
		});

		expect(queryByAltText("")).toBeNull();
	});

	it("should have prefetch attribute on internal link", () => {
		const { queryByText } = render(Link, {
			props: {
				href: "/about"
			}
		});

		expect(queryByText("/about")).toHaveAttribute("sveltekit:prefetch");
	});

	it("should NOT have prefetch attribute on external link", () => {
		const { queryByText } = render(Link, {
			props: {
				href: "https://seznam.cz"
			}
		});

		expect(queryByText("seznam.cz")).not.toHaveAttribute("sveltekit:prefetch");
	});
});
