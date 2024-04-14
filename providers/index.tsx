'use client';

import type { FC, PropsWithChildren } from 'react';

import { ProgressProvider } from './progress-bar-provider';
import { AuthProvider } from './auth-provider';
import { TanStackProvider } from './tanstack-provider';

export const ClientComponentProviders: FC<PropsWithChildren> = ({
	children,
}) => (
	<ProgressProvider>
		<AuthProvider>
			<TanStackProvider>{children}</TanStackProvider>
		</AuthProvider>
	</ProgressProvider>
);
