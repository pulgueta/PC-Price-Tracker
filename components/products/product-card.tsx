import { UrlObject } from 'url';

import { FC } from 'react';

import Link from 'next/link';

import { InfoIcon } from 'lucide-react';

import { buttonVariants } from '../ui/button';

type ProductProps = Prettify<{
	title: string;
	description: string;
	href: UrlObject | __next_route_internal_types__.RouteImpl<string>;
}>;

export const ProductCard: FC<ProductProps> = ({ description, href, title }) => {
	return (
		<article className='w-full rounded-xl border p-4 md:w-96 lg:w-72 2xl:w-96'>
			<h2 className='text-wrap text-2xl font-extrabold tracking-tighter'>
				{title}
			</h2>
			<p className='my-4 text-pretty'>{description}</p>
			<Link href={href} className={buttonVariants()} prefetch={false}>
				<InfoIcon className='mr-2 size-4' />
				Ver más
			</Link>
		</article>
	);
};
