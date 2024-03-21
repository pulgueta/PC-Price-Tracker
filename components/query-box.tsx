import type { FC } from 'react';

type Query = {
	query: string | string[];
};

export const QueryBox: FC<Query> = ({ query }) => {
	return (
		<section className='max-w-md rounded bg-secondary p-4'>
			<p className='text-pretty text-base tracking-normal'>
				Mostrando resultados para:{' '}
				<span className='italic'>"{query}"</span>
			</p>
		</section>
	);
};
