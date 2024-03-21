'use client';

import Link from 'next/link';

import { MenuIcon, UserIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import { buttonVariants } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { SearchBar } from './search-bar';

export const Navbar = () => {
	const mediumScreen = useMediaQuery('(max-width: 990px)');

	return (
		<nav className='flex items-center justify-between border-y p-4 shadow md:justify-around'>
			<Link
				href='/'
				className='text-wrap text-2xl font-extrabold tracking-tighter md:text-3xl'
			>
				PCComp Tracker
			</Link>

			<div className='flex max-w-xs items-center space-x-2 md:max-w-lg'>
				{mediumScreen ? (
					<>
						<DropdownMenu>
							<DropdownMenuTrigger className='rounded border p-2'>
								<MenuIcon />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<SearchBar />
								</DropdownMenuItem>
								<DropdownMenuItem
									className='cursor-pointer'
									asChild
								>
									<Link href='/'>Inicio</Link>
								</DropdownMenuItem>
								<DropdownMenuItem
									className='cursor-pointer'
									asChild
								>
									<Link href='/products'>Ver productos</Link>
								</DropdownMenuItem>
								<DropdownMenuItem
									className='cursor-pointer'
									asChild
								>
									<Link href='/favorites'>Favoritos</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<Link
							href='/auth'
							className={buttonVariants({ size: 'icon' })}
						>
							<UserIcon
								className={cn('size-4', {
									'mr-2': !mediumScreen,
								})}
							/>
							{!mediumScreen && 'Iniciar sesión'}
						</Link>
					</>
				) : (
					<div className='flex items-center gap-x-6'>
						<Link href='/products'>Ver productos</Link>
						<Link href='/favorites'>Favoritos</Link>
						<Link href='/auth' className={buttonVariants()}>
							<UserIcon
								className={cn('size-4', {
									'mr-2': !mediumScreen,
								})}
							/>
							{!mediumScreen && 'Iniciar sesión'}
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
