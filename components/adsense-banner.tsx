'use client';

import { useEffect, type ClassAttributes, type InsHTMLAttributes } from 'react';

import { env } from '@/env/client/index.mjs';

declare global {
	interface Window {
		adsbygoogle: any[];
	}
}

export const AdSenseBanner = (
	props: JSX.IntrinsicAttributes &
		ClassAttributes<HTMLModElement> &
		InsHTMLAttributes<HTMLModElement>,
) => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (error: any) {
			throw new Error(error);
		}
	}, []);

	return (
		<ins
			className='adsbygoogle adbanner-customize'
			style={{ display: 'block', overflow: 'hidden' }}
			data-ad-client={env.NEXT_PUBLIC_ADSENSE_ID}
			{...props}
		/>
	);
};
