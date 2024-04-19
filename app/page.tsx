import Image from 'next/image';

import { SearchBar } from '@/components/search-bar';
import translations from '@/i18n/es.json';

const Home = () => {
	const { landing, placeholders } = translations;

	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<h1 className='text-wrap text-center text-3xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-5xl'>
				{landing.heading}
			</h1>
			<h2 className='text-wrap text-center text-2xl font-bold leading-none tracking-tighter opacity-80 drop-shadow-sm md:text-3xl lg:text-4xl'>
				{landing.subheading}
			</h2>
			<section>
				<h3 className='text-wrap text-center text-lg font-semibold leading-none tracking-tighter opacity-80 drop-shadow-sm md:text-xl lg:text-2xl'>
					{landing.storesHeading}
				</h3>
				<div className='flex items-center gap-x-8 overflow-x-scroll md:overflow-x-auto'>
					<Image
						src='/tauretlogo.webp'
						alt={placeholders.images.tauret}
						width={100}
						height={100}
						className='drop-shadow grayscale transition hover:grayscale-0'
					/>
					<Image
						src='/speedlogiclogo.webp'
						alt={placeholders.images.speedlogic}
						width={128}
						height={128}
						className='drop-shadow grayscale transition hover:grayscale-0'
					/>
					<Image
						src='/themarklogo.webp'
						alt={placeholders.images.themark}
						width={80}
						height={80}
						className='drop-shadow grayscale transition hover:grayscale-0'
					/>
				</div>
			</section>
			<div
				aria-hidden
				className='absolute -z-10 size-64 rounded-full bg-pink-400/80 blur-3xl lg:size-96'
			/>
			<div
				aria-hidden
				className='absolute bottom-24 right-0 -z-10 size-32 rounded-full bg-green-400/50 blur-3xl'
			/>
			<SearchBar isHome />
		</main>
	);
};
export default Home;
