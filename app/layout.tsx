import type { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { ClientComponentProviders } from '@/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { env } from '@/env/client/index.mjs';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Analizador de precios',
	applicationName: 'PC Price Tracker',
	description:
		'Mantente informado de los precios de los componentes para tu computadora en las mejores tiendas tecnológicas de Colombia.',
	authors: [
		{
			name: 'Andrés Rodríguez',
			url: 'https://www.linkedin.com/in/and-rodr/',
		},
	],
	openGraph: {
		title: 'Analizador de precios',
		siteName: 'PC Price Tracker',
		description:
			'Mantente informado de los precios de los componentes para tu computadora en las mejores tiendas tecnológicas de Colombia.',
		url: 'https://pc-price-tracker.vercel.app/',
		countryName: 'Colombia',
		locale: 'es_CO',
		type: 'website',
		images: {
			url: '/pc-price-tracker.webp',
			alt: 'Analizador de precios',
			width: 1200,
			height: 630,
		},
	},
	metadataBase: new URL('https://pc-price-tracker.vercel.app/'),
	alternates: {
		canonical: '/',
	},
	twitter: {
		creator: '@pulgueta_',
	},
	creator: 'Andrés Rodríguez',
	keywords: [
		'pc',
		'scraping',
		'web-scraping',
		'colombia',
		'pc gamer',
		'gaming',
		'price tracker',
	],
};

type $RootLayout = PropsWithChildren & {};

const RootLayout: FC<$RootLayout> = ({ children }) => (
	<html lang='es'>
		<body className={inter.className}>
			<ClientComponentProviders>
				<Navbar />
				<Toaster richColors />
				{process.env.NODE_ENV === 'production' && (
					<Script
						async
						strategy='lazyOnload'
						crossOrigin='anonymous'
						src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${env.NEXT_PUBLIC_ADSENSE_ID}`}
					/>
				)}
				{children}
				<Footer />
			</ClientComponentProviders>
			{process.env.NODE_ENV === 'production' && <Analytics />}
		</body>
	</html>
);

export default RootLayout;
