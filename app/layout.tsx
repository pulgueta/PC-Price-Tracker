import type { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { ProgressProvider } from '@/providers/progress-bar-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Analizador de precios',
	description:
		'Mantente informado de los precios de los componentes para tu computadora en las mejores tiendas tecnológicas de Colombia.',
	authors: [
		{
			name: 'Andrés Rodríguez',
			url: 'https://www.linkedin.com/in/and-rodr/',
		},
	],
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

const RootLayout: FC<$RootLayout> = ({ children }) => {
	return (
		<html lang='es'>
			<body className={inter.className}>
				<ProgressProvider>
					<Navbar />
					{children}
					<Footer />
				</ProgressProvider>
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
};

export default RootLayout;
