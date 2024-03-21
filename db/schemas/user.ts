import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userSchema = sqliteTable('users', {
	id: integer('id').primaryKey(),
	firstName: text('first_name', { length: 64 }),
	lastName: text('last_name', { length: 64 }),
	email: text('email').notNull().unique(),
	password: text('password', { length: 32 }).notNull(),
});
