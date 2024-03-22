import type { Config } from 'drizzle-kit';
import 'dotenv/config';

import { env } from './env/server/index.mjs';

export default {
	schema: ['./db/schemas/user.ts'],
	out: './db/migrations',
	driver: 'turso',
	dbCredentials: {
		url: env.TURSO_DATABASE_URL,
		authToken: env.TURSO_AUTH_TOKEN,
	},
} satisfies Config;
