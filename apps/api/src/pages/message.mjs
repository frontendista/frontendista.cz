import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: "edge"
}

export default async function handler(request) {
	return new ImageResponse(
		(
			<div>
				Hello, World!
			</div>
		),
		{
			width: 1280,
			height: 640,
		}
	)
}
