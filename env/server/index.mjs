import { createEnv } from '@t3-oss/env-nextjs';
import { ZodError, string } from 'zod';

export const env = createEnv({
	server: {
		TURSO_DATABASE_URL: string().url(),
		TURSO_AUTH_TOKEN: string().min(32),
	},
	runtimeEnv: {
		TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
		TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
	},
	onValidationError: (error = ZodError) => {
		throw new Error('[*] Invalid environment variables', error.flatten().fieldErrors);
	},
	isServer: typeof window === 'undefined',
});
