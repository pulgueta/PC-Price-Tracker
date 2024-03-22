import { eq } from 'drizzle-orm';
import { hash } from 'argon2';

import { db } from '@/db';
import { UserSchema, userSchema } from '@/db/schemas/user';

/**
 * Updates user email
 * @param {string} email - The email of the user whose names are to be updated.
 * @returns {Promise<number>} User id
 */
export const updateUserEmail = async (email: string): Promise<number> => {
	const [user] = await db
		.update(userSchema)
		.set({ email })
		.where(eq(userSchema.email, email))
		.returning({ id: userSchema.id });

	return user.id;
};

/**
 * Updates user password
 * @param {string} newPassword - The new password the user wants to have.
 * @param {string} email - The email of the user whose names are to be updated.
 * @returns {Promise<number>} User id
 */
export const updateUserPassword = async (
	newPassword: string,
	email: string,
): Promise<number> => {
	const [user] = await db
		.update(userSchema)
		.set({ password: await hash(newPassword) })
		.where(eq(userSchema.email, email))
		.returning({ id: userSchema.id });

	return user.id;
};

/**
 * Updates user's first name
 * @param {string} firstName - The first name the user wants to have.
 * @param {string} email - The email of the user whose names are to be updated.
 * @returns {Promise<number>} User id
 */
export const updateUserFirstName = async (
	firstName: string,
	email: string,
): Promise<number> => {
	const [user] = await db
		.update(userSchema)
		.set({ firstName })
		.where(eq(userSchema.email, email))
		.returning({ id: userSchema.id });

	return user.id;
};

/**
 * Updates user password
 * @param {string} lastName - The last name the user wants to have.
 * @param {string} email - The email of the user whose names are to be updated.
 * @returns {Promise<number>} User id
 */
export const updateUserLastName = async (
	lastName: string,
	email: string,
): Promise<number> => {
	const [user] = await db
		.update(userSchema)
		.set({ lastName })
		.where(eq(userSchema.email, email))
		.returning({ id: userSchema.id });

	return user.id;
};

/**
 * Updates the first name and last name of a user in the database.
 * @param {Object} data - The object containing the updated first name and last name.
 * @param {string} data.firstName - The updated first name of the user.
 * @param {string} data.lastName - The updated last name of the user.
 * @param {string} email - The email of the user whose names are to be updated.
 * @returns {Promise<number>} User id
 */

export const updateUserNames = async (
	data: Pick<UserSchema, 'firstName' | 'lastName'>,
	email: string,
): Promise<number> => {
	const [user] = await db
		.update(userSchema)
		.set({ firstName: data.firstName, lastName: data.lastName })
		.where(eq(userSchema.email, email))
		.returning({ id: userSchema.id });

	return user.id;
};
