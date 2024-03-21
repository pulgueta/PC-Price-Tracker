'use client';

import { SearchIcon } from 'lucide-react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const SearchBar = () => {
	const mediumScreen = useMediaQuery('(max-width: 990px)');

	return (
		<form className='flex items-center gap-x-2'>
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
