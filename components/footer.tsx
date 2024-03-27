import Link from 'next/link';

import { GitHubLogo } from './svg/github';
import { TwitterLogo } from './svg/twitter';

export const Footer = () => {
	return (
		<footer className='z-20 flex flex-col gap-8 border-t p-6 shadow md:flex-row md:items-center md:justify-between lg:justify-around'>
			<Link
				href='/'
				className='text-wrap text-xl font-extrabold tracking-tighter md:text-3xl'
			>
				PCComp Tracker
			</Link>
			<ul className='flex flex-col gap-4 text-right tracking-tighter md:flex-row md:text-sm'>
				<li>
					<Link
						href='https://github.com/pulgueta/PC-Price-Tracker'
						target='_blank'
						className='flex items-center justify-end gap-x-1 font-semibold hover:underline'
					>
						<GitHubLogo />
						GitHub
					</Link>
				</li>
				<li>
					<Link
						href='https://twitter.com/pulgueta_'
						target='_blank'
						className='flex items-center justify-end gap-x-1 font-semibold hover:underline'
					>
						<TwitterLogo /> X (Twitter)
					</Link>
				</li>
			</ul>
		</footer>
	);
};
