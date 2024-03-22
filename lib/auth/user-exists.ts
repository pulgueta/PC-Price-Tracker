import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { userSchema } from '@/db/schemas/user';

export const userExistsWithEmail = async (email: string) => {
	const [userExists] = await db
		.select()
		.from(userSchema)
		.where(eq(userSchema.email, email));

	return userExists ? true : false;
};
