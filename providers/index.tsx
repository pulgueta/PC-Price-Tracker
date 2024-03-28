'use client';

import type { FC, PropsWithChildren } from 'react';

import { ProgressProvider } from './progress-bar-provider';

export const ClientComponentProviders: FC<PropsWithChildren> = ({
	children,
}) => <ProgressProvider>{children}</ProgressProvider>;
