import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { userSchema } from '@/db/schemas/user';

/**
 * Verifies if user exists with a given email
 * @param {string} email - The email to check if exists in database.
 * @returns {Promise<boolean>} true or false
 */
export const userExistsWithEmail = async (email: string): Promise<boolean> => {
	const [userExists] = await db
		.select()
		.from(userSchema)
		.where(eq(userSchema.email, email));

	return userExists ? true : false;
};
