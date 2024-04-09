import NextAuth from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import { db } from '@/db';
import authConfig from './auth.config';
import { env } from './env/server/index.mjs';

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
	secret: env.AUTH_SECRET,
	session: { strategy: 'jwt' },
	trustHost: true,
	...authConfig,
});
