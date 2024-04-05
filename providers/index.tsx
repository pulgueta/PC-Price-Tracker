'use client';

import type { FC, PropsWithChildren } from 'react';

import { ProgressProvider } from './progress-bar-provider';
import { AuthProvider } from './auth-provider';

export const ClientComponentProviders: FC<PropsWithChildren> = ({
	children,
}) => (
	<ProgressProvider>
		<AuthProvider>{children}</AuthProvider>
	</ProgressProvider>
);
