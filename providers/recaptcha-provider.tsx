'use client';

import type { FC, PropsWithChildren } from 'react';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { env } from '@/env/client/index.mjs';

export const ReCAPTCHAProvider: FC<PropsWithChildren> = ({ children }) => (
	<GoogleReCaptchaProvider reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_KEY}>
		{children}
	</GoogleReCaptchaProvider>
);
