import satori from 'satori';
import { html } from "satori-html"
import { parseAsync } from 'valibot';
import { Resvg } from "@resvg/resvg-js"

import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

import { asyncHandler } from '../../utils';
import { MESSAGE_BODY } from '../../schemas/message';

import type { APIRoute } from 'astro';

export const prerender = false

export const POST: APIRoute = asyncHandler(async ({ request }) => {
	await parseAsync(MESSAGE_BODY, await request.json(), {
		abortPipeEarly: true
	})

	const FONT_PATH = process.env.VERCEL_ENV ? 'apps/api/src/og' : 'src/og'

	const font = await readFile(join(process.cwd(), FONT_PATH, 'test.ttf'))

	const svg = await satori(
		// @ts-ignore
		html`<div style={{ fontFamily: "SUSE" }}>Hello, World!</div>`,
		{
			width: 1280,
			height: 640,
			fonts: [
				{
					name: 'SUSE',
					data: font,
					weight: 400,
					style: 'normal'
				}
			]
		}
	)

	const resvg = new Resvg(svg)

	const pngData = resvg.render()
	const pngBuffer = pngData.asPng()

	return new Response(pngBuffer, {
		headers: {
			'Content-Type': 'image/png'
		}
	})
})
