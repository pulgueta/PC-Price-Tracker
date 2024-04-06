import { createEnv } from '@t3-oss/env-nextjs';
import { ZodError, string } from 'zod';

export const env = createEnv({
	server: {
		TURSO_DATABASE_URL: string().url(),
		TURSO_AUTH_TOKEN: string().min(32),
		SENTRY_DSN: string().url(),
		RECAPTCHA_KEY: string().min(8),
		AUTH_SECRET: string().min(32),
	},
	runtimeEnv: {
		TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
		TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
		SENTRY_DSN: process.env.SENTRY_DSN,
		RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
		AUTH_SECRET: process.env.AUTH_SECRET,
	},
	onValidationError: (error = ZodError) => {
		throw new Error(
			'[*] Invalid environment variables',
			error.flatten().fieldErrors,
		);
	},
	isServer: typeof window === 'undefined',
});
