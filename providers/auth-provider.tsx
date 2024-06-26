'use client';

import type { FC, PropsWithChildren } from 'react';

import { SessionProvider } from 'next-auth/react';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => (
	<SessionProvider>{children}</SessionProvider>
);
