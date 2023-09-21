import { rest } from "msw";
import { z } from "zod";

import { SPOTIFY_AUTH_RESPONSE, SPOTIFY_TOP_TRACKS_RESPONSE } from "./samples/spotify";

export const SPOTIFY_AUTH_RESPONSE_SCHEMA = z.object({
	access_token: z.string(),
	token_type: z.literal("Bearer"),
	expires_in: z.number(),
});

export const SPOTIFY_TOP_TRACKS_RESPONSE_SCHEMA = z.object({
	items: z.array(z.object({
		name: z.string(),
		href: z.string()
	}))
});

export const handlers = [
	rest.get("https://api.spotify.com/v1/me/top/tracks", (_, res, ctx) => {
		return res(ctx.json(SPOTIFY_TOP_TRACKS_RESPONSE));
	}),
	rest.post("https://accounts.spotify.com/api/token", (_, res, ctx) => {
		return res(ctx.json(SPOTIFY_AUTH_RESPONSE));
	})
];
