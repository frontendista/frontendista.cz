import satori from 'satori';
import { html } from "satori-html"
import { parseAsync } from 'valibot';
import { Resvg } from "@resvg/resvg-js"
import { Schemas } from "@frontendista/validation"

import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

import { asyncHandler } from '../../utils';

import type { APIRoute } from 'astro';

export const prerender = false

export const POST: APIRoute = asyncHandler(async ({ request }) => {
	const { firstname, lastname, message } = await parseAsync(Schemas.MESSAGE_BODY, await request.json(), {
		abortPipeEarly: true
	})

	const FONT_PATH = process.env.VERCEL_ENV ? 'apps/api/src/og' : 'src/og'

	const font = await readFile(join(process.cwd(), FONT_PATH, 'test.ttf'))

	const id = crypto.randomUUID()
	const timestamp = Date.now()

	const fullname = `${firstname || ''} ${lastname || ''}`.trim()

	// TODO: Get the number of the message from the database.

	const svg = await satori(
		// @ts-ignore
		html`
			<div tw="bg-white h-full text-black flex items-center justify-center flex-col" style={{ fontFamily: "SUSE" }}>
				<span tw="text-[4rem]">${fullname}</span>
				<span tw="text-[4rem]">${message.length} characters</span>
				<span tw="absolute top-[32px] left-[32px]">Message number: 1</span>
				<span tw="absolute top-[32px] right-[32px]">Digitally signed</span>
				<span tw="absolute left-[32px] bottom-[32px]">${id}</span>
				<span tw="absolute right-[32px] bottom-[32px]">${timestamp}</span>
			</div>
		`,
		{
			width: 1920,
			height: 1080,
			// debug: !process.env.VERCEL,
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

	// TODO: Digitally sign the image.

	return new Response(pngBuffer, {
		headers: {
			'Content-Type': 'image/png'
		}
	})
})
