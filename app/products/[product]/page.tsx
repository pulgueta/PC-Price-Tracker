import { NextPage } from 'next';

type $Product = {
	params: { product: string };
};

const Product: NextPage<$Product> = async ({ params }) => {
	const decodedProduct = decodeURIComponent(params.product);

	return (
		<div className='flex min-h-dvh flex-col items-center justify-center gap-4 p-2 md:min-h-[calc(100vh-162px)] md:p-0 lg:min-h-[calc(100vh-160px)]'>
			<article className='rounded border p-4'>
				<h1 className='mb-2 text-wrap text-center text-3xl font-bold tracking-tight'>
					Product:
				</h1>
				<p className='text-pretty text-center text-xl'>
					{decodedProduct}
				</p>
			</article>
		</div>
	);
};
export default Product;
