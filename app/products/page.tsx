import type { NextPage, ResolvingMetadata } from 'next';

import { QueryBox } from '@/components/query-box';
import { Separator } from '@/components/ui/separator';
import { AdSenseBanner } from '@/components/adsense-banner';
import { ProductCard } from '@/components/products/product-card';
import { cn } from '@/lib/utils';
import { Filter } from './filter';

type $Products = {
	searchParams: {
		q: string | string[];
	};
};

const Products: NextPage<$Products> = ({ searchParams }) => {
	return (
		<div className='flex min-h-dvh flex-col items-center gap-4 p-2 md:min-h-[calc(100vh-162px)] md:p-0 lg:min-h-[calc(100vh-160px)]'>
			{process.env.NODE_ENV === 'production' && <AdSenseBanner />}
			{searchParams.q && <QueryBox query={searchParams.q} />}

			<h1
				className={cn(
					'mb-2 text-wrap text-center text-3xl font-extrabold tracking-tighter lg:text-4xl',
					{
						'mt-2': searchParams.q,
						'mt-8': !searchParams.q,
					},
				)}
			>
				{searchParams.q
					? 'Resultados de tu búsqueda'
					: 'Todos los productos'}
			</h1>

			<Separator className='max-w-4xl' />

			<section className='flex flex-col items-center justify-between gap-4 p-4 md:flex-row md:items-start lg:gap-2'>
				<Filter />
				<section className='mx-auto grid w-full grid-cols-1 justify-items-center gap-4 md:container lg:grid-cols-2 xl:grid-cols-3'>
					<ProductCard
						title='Intel Core i9 14900K'
						description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Laudantium, eaque minima repellendus inventore dolore veniam
				architecto eum voluptate cupiditate eius optio sunt omnis
				repudiandae ex, dolorum ipsam itaque sed totam!'
						href='/'
					/>
					<ProductCard
						title='Intel Core i9 14900K'
						description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Laudantium, eaque minima repellendus inventore dolore veniam
				architecto eum voluptate cupiditate eius optio sunt omnis
				repudiandae ex, dolorum ipsam itaque sed totam!'
						href='/'
					/>
					<ProductCard
						title='Intel Core i9 14900K'
						description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Laudantium, eaque minima repellendus inventore dolore veniam
				architecto eum voluptate cupiditate eius optio sunt omnis
				repudiandae ex, dolorum ipsam itaque sed totam!'
						href='/'
					/>
					<ProductCard
						title='Intel Core i9 14900K'
						description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Laudantium, eaque minima repellendus inventore dolore veniam
				architecto eum voluptate cupiditate eius optio sunt omnis
				repudiandae ex, dolorum ipsam itaque sed totam!'
						href='/'
					/>
					<ProductCard
						title='Intel Core i9 14900K'
						description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Laudantium, eaque minima repellendus inventore dolore veniam
				architecto eum voluptate cupiditate eius optio sunt omnis
				repudiandae ex, dolorum ipsam itaque sed totam!'
						href='/'
					/>
				</section>
			</section>
		</div>
	);
};
export default Products;

export async function generateMetadata({
	searchParams,
}: $Products): Promise<ResolvingMetadata> {
	const q = searchParams.q;

	const text = q === undefined ? '' : q;
	const description =
		q !== undefined
			? `¡Encuentra los mejores precios para "${text}" en cuestión de segundos!`
			: '¡Encuentra los mejores precios de componentes de PC en cuestión de segundos!';
	const url =
		q !== undefined
			? new URL(`https://pc-price-tracker.vercel.app/products?q=${q}`)
			: new URL('https://pc-price-tracker.vercel.app/products');

	return {
		// @ts-ignore
		title: q ? `Búsqueda de producto: ${q}` : 'Búsqueda de productos',
		openGraph: {
			// @ts-ignore
			title: q ? `Búsqueda de producto: ${q}` : 'Búsqueda de productos',
			type: 'website',
			url,
			images: [`/api/og?q=${text}`],
			locale: 'es_CO',
			siteName: 'PC Price Tracker',
			description,
			authors: ['Andrés Rodríguez'],
			countryName: 'Colombia',
		},
		metadataBase: new URL('https://pc-price-tracker.vercel.app/'),
		description:
			'Busca el producto que necesites y encuentra su mejor precio en segundos.',
	};
}
