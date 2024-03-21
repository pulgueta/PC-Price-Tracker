import type { NextPage, ResolvingMetadata } from 'next';

import { QueryBox } from '@/components/query-box';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type $Products = {
	searchParams: {
		q: string | string[];
	};
};

const Products: NextPage<$Products> = ({ searchParams }) => {
	return (
		<div className='flex min-h-dvh flex-col items-center gap-4 md:min-h-[calc(100vh-162px)] lg:min-h-[calc(100vh-160px)]'>
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

			<Separator className='max-w-5xl' />
		</div>
	);
};
export default Products;

export async function generateMetadata(
	{ searchParams }: $Products,
	_parent: ResolvingMetadata,
): Promise<ResolvingMetadata> {
	const q = searchParams.q;

	const text = q === undefined ? '' : q;
	const description =
		q !== undefined
			? `¡Encuentra los mejores precios para "${text}" en cuestión de segundos!`
			: '¡Encuentra los mejores precios de componentes de PC en cuestión de segundos!';

	return {
		// @ts-ignore
		title: q ? `Búsqueda de producto: ${q}` : 'Búsqueda de productos',
		// @ts-ignore
		openGraph: {
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
