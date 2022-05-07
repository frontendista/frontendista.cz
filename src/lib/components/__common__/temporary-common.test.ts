import Temporary from "./temporary-common.svelte";

import { render } from "@testing-library/svelte";

describe("Settings Component", () => {
	it("should render", () => {
		const { getByText } = render(Temporary);
		expect(getByText("TODO: Remove")).toBeDefined();
	});
});
