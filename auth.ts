import NextAuth from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import { db } from '@/db';
import authConfig from './auth.config';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
	unstable_update: update,
} = NextAuth({
	pages: {
		signIn: '/auth',
		newUser: '/auth',
	},
	adapter: DrizzleAdapter(db),
	session: { strategy: 'jwt' },
	...authConfig,
});
