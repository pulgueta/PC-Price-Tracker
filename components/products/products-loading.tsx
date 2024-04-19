import { Skeleton } from '../ui/skeleton';

export const ProductsLoading = () => {
	return (
		<div className='grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3'>
			{Array.from({ length: 6 }).map((_, i) => (
				<Skeleton
					key={i}
					className='h-96 w-full rounded-xl border p-4 md:w-96 lg:w-72 2xl:w-96'
				/>
			))}
		</div>
	);
};
