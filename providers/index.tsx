'use client';

import type { FC, PropsWithChildren } from 'react';

import { ProgressProvider } from './progress-bar-provider';
import { ReCAPTCHAProvider } from './recaptcha-provider';

export const ClientComponentProviders: FC<PropsWithChildren> = ({
	children,
}) => (
	<ProgressProvider>
		<ReCAPTCHAProvider>{children}</ReCAPTCHAProvider>
	</ProgressProvider>
);
