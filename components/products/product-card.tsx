import type { UrlObject } from 'url';

import type { FC } from 'react';

import { Link } from 'next-view-transitions';
import { InfoIcon } from 'lucide-react';

import { buttonVariants } from '../ui/button';

type ProductResult = {
	href: UrlObject | __next_route_internal_types__.RouteImpl<string>;
} & (({ category: 'cpu' } & CPU) | ({ category: 'gpu' } & GPU));

export const ProductCard: FC<ProductResult> = async ({
	category,
	href,
	name,
	price,
}) => {
	const { categories, productCard } = (await import('@/i18n/es.json'))
		.default;

	const formattedPrice =
		price !== null
			? new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
				}).format(price as number)
			: productCard.price.notAvailable;

	return (
		<article className='flex max-h-96 w-full flex-col items-start justify-between rounded-xl border p-4 md:w-96 lg:w-72 2xl:w-96'>
			<div>
				<h2 className='truncate text-wrap text-2xl font-extrabold tracking-tighter'>
					{name}
				</h2>
				<p className='mb-2 mt-4 text-pretty'>
					{productCard.category}:{' '}
					{categories[category as keyof typeof categories].label}
				</p>
				<p className='mb-4 mt-2 text-pretty'>
					{productCard.price.priceInUsd}: {formattedPrice}
				</p>
			</div>
			<Link href={href} className={buttonVariants()} prefetch={false}>
				<InfoIcon className='mr-2 size-4' />
				{productCard.href}
			</Link>
		</article>
	);
};
