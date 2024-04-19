import { Link } from 'next-view-transitions';
import { MenuIcon, UserIcon } from 'lucide-react';

import { buttonVariants } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { getSession } from '@/lib/auth/get-session';

export const Navbar = async () => {
	const session = await getSession();

	return (
		<nav className='flex items-center justify-between border-y p-4 shadow md:justify-around'>
			<Link
				href='/'
				className='text-wrap text-2xl font-extrabold tracking-tighter md:text-3xl'
			>
				Price Tracker
			</Link>

			<div className='flex max-w-xs items-center space-x-2 md:max-w-lg'>
				<DropdownMenu>
					<DropdownMenuTrigger className='block rounded border p-2 md:hidden'>
						<MenuIcon aria-label='Menú móvil' />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Inicio</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/products'>Ver productos</Link>
						</DropdownMenuItem>
						{session && (
							<DropdownMenuItem
								className='cursor-pointer'
								asChild
							>
								<Link href='/favorites'>Favoritos</Link>
							</DropdownMenuItem>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
				<Link
					href={session ? '/' : '/auth'}
					className={buttonVariants({
						size: 'icon',
						className: 'block md:hidden',
					})}
				>
					<UserIcon
						aria-label='Iniciar sesión'
						className='size-4 md:size-8'
					/>
				</Link>

				<div className='hidden items-center gap-x-6 md:flex'>
					<Link href='/products'>Ver productos</Link>
					{session && <Link href='/favorites'>Favoritos</Link>}
					<Link
						href={session ? '/' : '/auth'}
						className={buttonVariants()}
					>
						<UserIcon className='size-4' />
					</Link>
				</div>
			</div>
		</nav>
	);
};
