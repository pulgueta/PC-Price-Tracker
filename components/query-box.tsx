import type { FC } from 'react';

type Query = {
	query: string | string[];
};

export const QueryBox: FC<Query> = ({ query }) => {
	return (
		<section className='w-full rounded bg-secondary p-8'>
			<p className='text-pretty text-center text-lg font-bold tracking-tight'>
				Mostrando resultados para:{' '}
				<span className='italic'>&quot;{query}&quot;</span>
			</p>
		</section>
	);
};
