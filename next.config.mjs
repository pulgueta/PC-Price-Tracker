import { next } from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: true,
        }
    },
};

export default next(nextConfig);
