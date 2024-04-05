import { cache } from 'react';

import { auth } from '@/auth';

export const getSession = cache(async () => {
	const user = await auth();

	return user?.user;
});

export type CurrentUser = Awaited<ReturnType<typeof getSession>>;
