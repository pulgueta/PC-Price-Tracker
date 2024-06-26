import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

import { env } from '@/env/server/index.mjs';

const turso = createClient({
	url: env.TURSO_DATABASE_URL,
	authToken: env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
