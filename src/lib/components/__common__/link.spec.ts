import Link from "./link.svelte";

import { render } from "@testing-library/svelte";

describe("Settings Component", () => {
	it("should render", () => {
		const { getByText } = render(Link, {
			props: {
				href: "https://seznam.cz"
			}
		});
		expect(getByText("seznam.cz")).toBeDefined();
	});

	it("should render backup text for external link when slot is not passed", () => {
		const { getByText } = render(Link, {
			props: {
				href: "https://seznam.cz"
			}
		});

		expect(getByText("seznam.cz")).toBeDefined();
	});

	it("should render backup text for internal link when slot is not passed", () => {
		const { getByText } = render(Link, {
			props: {
				href: "/about"
			}
		});

		expect(getByText("/about")).toBeDefined();
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
});
