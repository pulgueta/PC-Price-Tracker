'use client';

import { LoginForm } from '@/components/form/login-form';
import { RegisterForm } from '@/components/form/register-form';
import { Separator } from '@/components/ui/separator';
import { useMediaQuery } from '@/hooks/use-media-query';

const Auth = () => {
	const mediumScreen = useMediaQuery('(max-width: 990px)');

	return (
		<div className='flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<article className='flex w-full flex-col justify-center gap-8 rounded border p-8 shadow lg:w-auto lg:flex-row'>
				<LoginForm />
				{mediumScreen ? (
					<Separator orientation='horizontal' />
				) : (
					<div aria-hidden className='mx-4 w-1 border' />
				)}
				<RegisterForm />
			</article>
		</div>
	);
};
export default Auth;
