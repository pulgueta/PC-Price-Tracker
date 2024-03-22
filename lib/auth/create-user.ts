import { hash } from 'argon2';

import { db } from '@/db';
import { UserSchema, userSchema } from '@/db/schemas/user';

/**
 * Creates a new user in SQLite
 * @param {object} data - User data
 * @returns {Promise<string>} User email
 */
export const createUser = async (data: UserSchema): Promise<string> => {
	const [user] = await db
		.insert(userSchema)
		.values({
			email: data.email,
			password: await hash(data.password),
		})
		.returning({ email: userSchema.email });

	return user.email;
};
