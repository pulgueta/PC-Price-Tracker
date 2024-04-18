import translations from '@/i18n/es.json';

export const ProductError = ({ message }: { message: string }) => {
	const { errors } = translations;

	return (
		<div className='rounded border p-4'>
			<p className='text-pretty text-center text-lg font-bold md:text-left'>
				{errors.queryError + message}
			</p>
		</div>
	);
};
