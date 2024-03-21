'use client';

import { type PropsWithChildren, Suspense } from 'react';

import { AppProgressBar } from 'next-nprogress-bar';

export const ProgressProvider = ({ children }: PropsWithChildren) => {
	return (
		<>
			{children}
			<Suspense fallback={<></>}>
				<AppProgressBar
					options={{ showSpinner: false }}
					color='#09f'
					shallowRouting
				/>
			</Suspense>
		</>
	);
};
