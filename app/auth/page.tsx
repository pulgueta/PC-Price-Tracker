import { LoginForm } from '@/components/form/login-form';
import { RegisterForm } from '@/components/form/register-form';
import { ReCAPTCHAProvider } from '@/providers/recaptcha-provider';

const Auth = () => {
	return (
		<section className='flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<article className='flex w-full flex-col justify-center gap-8 rounded border p-8 shadow lg:w-auto lg:flex-row'>
				<LoginForm />
				<div
					className='h-1 w-full rounded border lg:mx-4 lg:h-96 lg:w-1'
					aria-hidden
				/>
				<ReCAPTCHAProvider>
					<RegisterForm />
				</ReCAPTCHAProvider>
			</article>
		</section>
	);
};
export default Auth;
