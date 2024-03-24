import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { verify } from 'argon2';

import { loginSchema } from '@/schemas/loginSchema';
import { getUserByEmail } from '@/lib/auth/user-exists';

export default {
	providers: [
		Credentials({
			authorize: async (credentials) => {
				const validatedFields = loginSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await getUserByEmail(email);

					if (!user) return null;

					const passwordsMatch = await verify(
						user.password,
						password,
					);

					if (passwordsMatch) return user;
				}

				return {};
			},
		}),
	],
} satisfies NextAuthConfig;
