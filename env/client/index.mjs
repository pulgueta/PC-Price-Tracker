import { createEnv } from '@t3-oss/env-nextjs';
import { ZodError, string } from 'zod';

export const env = createEnv({
	client: {
		NEXT_PUBLIC_ADSENSE_ID: string().min(8)
	},
	runtimeEnv: {
		NEXT_PUBLIC_ADSENSE_ID: process.env.NEXT_PUBLIC_ADSENSE_ID,

	},
	onValidationError: (error = ZodError) => {
		throw new Error('[*] Invalid environment variables', error.flatten().fieldErrors);
	},
});
