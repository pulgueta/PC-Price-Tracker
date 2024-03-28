import { NextResponse, type NextRequest } from 'next/server';

import { env } from '@/env/server/index.mjs';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
	const data = await req.json();

	const formData = `secret=${env.RECAPTCHA_KEY}&response=${data.token}`;
	const res = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?${formData}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		},
	);

	if (!res.ok) {
		return NextResponse.json(
			{
				error: `Google ReCAPTCHA error: ${res.statusText}`,
			},
			{ status: res.status, statusText: res.statusText },
		);
	}

	const captchaRes = await res.json();

	if (captchaRes.success && captchaRes.score > 0.5) {
		return NextResponse.json(
			{ success: true, score: captchaRes.score },
			{ status: 200 },
		);
	} else {
		return NextResponse.json(
			{ success: false, error: captchaRes },
			{ status: 403 },
		);
	}
};
