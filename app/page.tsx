import { SearchBar } from '@/components/search-bar';

const Home = () => {
	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<h1 className='text-wrap text-center text-3xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-5xl'>
				Todos los precios de tus componentes favoritos
			</h1>
			<h2 className='text-wrap text-center text-2xl font-bold leading-none tracking-tighter opacity-80 drop-shadow-sm md:text-3xl lg:text-4xl'>
				En un solo lugar
			</h2>
			<section>
				<h3 className='text-wrap text-center text-lg font-semibold leading-none tracking-tighter opacity-80 drop-shadow-sm md:text-xl lg:text-2xl'>
					Encontrarás precios de:
				</h3>
				<div className='mx-4 mt-4 inline-block size-20 rounded bg-gray-400'></div>
				<div className='mx-4 mt-4 inline-block size-20 rounded bg-gray-400'></div>
				<div className='mx-4 mt-4 inline-block size-20 rounded bg-gray-400'></div>
			</section>
			<div
				aria-hidden
				className='absolute -z-10 size-64 rounded-full bg-pink-400/80 blur-3xl lg:size-96'
			/>
			<div
				aria-hidden
				className='absolute bottom-24 right-0 -z-10 size-32 rounded-full bg-green-400/50 blur-3xl'
			/>
			<SearchBar />
		</main>
	);
};
export default Home;
