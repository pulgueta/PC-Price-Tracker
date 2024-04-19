import { withSentryConfig } from '@sentry/nextjs';
import { next } from 'million/compiler';

import './env/server/index.mjs';
import './env/client/index.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: { typedRoutes: true },
};

export default withSentryConfig(
	next(nextConfig),
	{
		silent: true,
		org: 'andres-rodriguez',
		project: 'pc-price-tracker',
	},
	{
		widenClientFileUpload: true,
		transpileClientSDK: true,
		tunnelRoute: '/monitoring',
		hideSourceMaps: true,
		disableLogger: true,
		automaticVercelMonitors: true,
	},
);
