import { graphql } from "msw";

const RELEASE_TAG_RESPONSE = {
	repository: {
		latestRelease: {
			tagName: "frontend@0.0.0",
			createdAt: "2000-01-01T20:33:09Z",
			tagCommit: {
				oid: "00000008664829e5a43e6993de760cb4a24a4531"
			},
			url: "https://github.com/frontendista/frontendista.cz/releases/tag/frontend%401.7.0"
		}
	}
};

export type GitHubReleaseResponse = typeof RELEASE_TAG_RESPONSE;

export const handlers = [
	graphql.query("getLatestRelease", (_, res, ctx) => {
		return res(ctx.data(RELEASE_TAG_RESPONSE));
	})
];
