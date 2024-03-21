import { NextPage } from 'next';

import { QueryBox } from '@/components/query-box';
import { Separator } from '@/components/ui/separator';

type $Products = {
	searchParams: {
		q: string | string[];
	};
};

const Products: NextPage<$Products> = ({ searchParams }) => {
	return (
		<div className='flex min-h-dvh flex-col items-center gap-4 md:min-h-[calc(100vh-162px)] lg:min-h-[calc(100vh-160px)]'>
			<h1 className='mb-2 mt-8 text-wrap text-center text-3xl font-extrabold tracking-tighter lg:text-4xl'>
				{searchParams.q
					? 'Resultados de tu búsqueda'
					: 'Todos los productos'}
			</h1>
			{searchParams.q && <QueryBox query={searchParams.q} />}

			<Separator className='max-w-5xl' />
		</div>
	);
};
export default Products;
