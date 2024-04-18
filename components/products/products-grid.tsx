'use client';

import { useCallback, useState, type FC } from 'react';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

import { Button } from '../ui/button';
import { ProductError } from './product-error';
import { ProductsLoading } from './products-loading';
import { ProductCard } from './product-card';

type ProductsGridProps = {
	searchParams: {
		q: string;
		category: string;
		page?: number;
	};
};

export const ProductsGrid: FC<ProductsGridProps> = ({ searchParams }) => {
	const [page, setPage] = useState(0);

	const { push } = useRouter();
	const pathname = usePathname();

	const hookSearchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(hookSearchParams.toString());
			params.set(name, value);

			return params.toString();
		},

		[hookSearchParams],
	);

	const onPageIncrease = () => {
		push(
			`${pathname}&${createQueryString('page', page.toString())}` as Route,
		);
	};

	const onPageDecrease = () => {
		push(
			`${pathname}?q=${searchParams.q}&category=${searchParams.category}&page=${searchParams.page! - 1 ?? page - 1}` as Route,
		);
	};

	const {
		data: products,
		isLoading,
		error,
		isFetching,
		isPlaceholderData,
	} = useQuery({
		queryKey: [
			'products',
			page,
			searchParams.q,
			searchParams.category,
			searchParams.page,
		],
		queryFn: async () => {
			const encodedQuery = encodeURIComponent(searchParams.q);

			const res = await fetch(
				`/api/products?q=${encodedQuery}&category=${searchParams.category}&page=${searchParams.page ?? page}`,
				{
					method: 'POST',
				},
			);

			const data = await res.json();

			return data.map((product: any) => ({
				...product,
				category: searchParams.category,
			}));
		},
		placeholderData: keepPreviousData,
	});

	return (
		<>
			{isLoading && <ProductsLoading />}
			{error && <ProductError message={error.message} />}
			{products && (
				<div className='grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3'>
					{products.map(async (product: any) => {
						const encodedProduct = encodeURIComponent(product.name);

						return (
							<ProductCard
								category={searchParams.category}
								key={product.name}
								href={'/products/' + encodedProduct}
								{...product}
							/>
						);
					})}
				</div>
			)}

			<div className='mx-auto my-8 flex w-max gap-4'>
				<Button
					disabled={
						searchParams.page === 0 ??
						(page === 0 || isLoading || isFetching)
					}
					onClick={() => {
						setPage((old) => Math.max(old - 1, 0));
						onPageDecrease();
					}}
				>
					<ArrowLeftIcon className='mr-2 size-4' />
					Anterior
				</Button>
				<Button
					disabled={isPlaceholderData || isFetching || isLoading}
					onClick={() => {
						if (!isPlaceholderData) {
							setPage((old) => old + 1);
							onPageIncrease();
						}
					}}
				>
					Siguiente
					<ArrowRightIcon className='ml-2 size-4' />
				</Button>
			</div>
		</>
	);
};
