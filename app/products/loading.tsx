import { LoaderCircleIcon } from 'lucide-react';

const Loading = () => {
	return (
		<div className='flex min-h-dvh flex-col items-center justify-center gap-4 p-2 md:min-h-[calc(100vh-162px)] md:p-0 lg:min-h-[calc(100vh-160px)]'>
			<LoaderCircleIcon className='size-8 animate-spin' />
			<p className='text-center'>Cargando los productos...</p>
		</div>
	);
};
export default Loading;
