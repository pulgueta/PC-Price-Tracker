import { db } from '@/db';
import { UserSchema, userSchema } from '@/db/schemas/user';

export const createUser = async (data: UserSchema) => {
	const [user] = await db
		.insert(userSchema)
		.values(data)
		.returning({ email: userSchema.email });

	return user;
};
