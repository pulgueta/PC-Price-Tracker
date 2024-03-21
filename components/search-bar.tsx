'use client';

import type { ElementRef, FormEvent } from 'react';

import { useRouter } from 'next/navigation';

import { SearchIcon } from 'lucide-react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const SearchBar = () => {
	const { push } = useRouter();

	const mediumScreen = useMediaQuery('(max-width: 990px)');

	const onSubmit = (e: FormEvent<ElementRef<'form'>>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const q = formData.get('q') as string;

		if (q.length < 3) return;

		push(`/products?q=${q}`);
	};

	return (
		<form className='flex items-center gap-x-2' onSubmit={onSubmit}>
			<Input
				className={!mediumScreen ? 'w-64' : 'w-40'}
				name='q'
				placeholder={
					!mediumScreen
						? 'NVIDIA GeForce RTX 4090...'
						: 'Intel Core i7...'
				}
			/>

			<Button type='submit'>
				<SearchIcon className='mr-2 size-4' />
				Buscar
			</Button>
		</form>
	);
};
