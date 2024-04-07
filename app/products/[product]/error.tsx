'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
	return (
		<div className='flex min-h-dvh flex-col items-center justify-center gap-4 p-2 md:min-h-[calc(100vh-162px)] md:p-0 lg:min-h-[calc(100vh-160px)]'>
			<section className='mx-auto flex max-w-5xl flex-col items-center justify-center gap-y-4'>
				<h1 className='text-wrap text-center text-3xl font-bold tracking-tight'>
					&iexcl;Oops! Algo ha salido mal...
				</h1>
				<h2 className='text-wrap text-center text-xl font-semibold'>{`${error.name}`}</h2>
				<p className='text-pretty text-center'>{`${error.message}`}</p>
				<Link href='/products' className={buttonVariants()}>
					Volver a la página de productos
				</Link>
			</section>
		</div>
	);
};

export default Error;
