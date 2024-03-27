'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
	const { push } = useRouter();

	return (
		<main className='flex h-[calc(100dvh-80px)] flex-col items-center justify-center'>
			<section className='mx-auto flex max-w-5xl flex-col items-center justify-center gap-y-4'>
				<h1 className='text-wrap text-center text-3xl font-bold'>
					&iexcl;Oops! Algo ha salido mal...
				</h1>
				<h2 className='text-wrap text-center text-xl font-semibold'>{`${error.name}`}</h2>
				<p className='text-pretty text-center'>{`${error.message}`}</p>
				<Button onClick={() => push('/')}>Ir al inicio</Button>
			</section>
		</main>
	);
};

export default Error;
