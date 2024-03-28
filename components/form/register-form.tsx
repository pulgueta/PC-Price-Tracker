'use client';

import {
	type ElementRef,
	type FormEvent,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useFormState } from 'react-dom';

import { useRouter } from 'next/navigation';

import { toast } from 'sonner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { CheckIcon, InfoIcon } from 'lucide-react';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SubmitButton } from './submit-button';
import { register } from '@/actions/auth/register';
import { cn, randomString } from '@/lib/utils';

export const RegisterForm = () => {
	const [show, setShow] = useState(false);
	const form = useRef<ElementRef<'form'>>(null);
	const [state, formAction] = useFormState(register, undefined);

	const { refresh } = useRouter();

	const { executeRecaptcha } = useGoogleReCaptcha();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!executeRecaptcha) {
			toast.error('ReCAPTCHA', {
				description: 'Error al validar el captcha.',
			});
			return;
		}

		const token = await executeRecaptcha(randomString(10));

		const res = await fetch('/api/captcha', {
			method: 'POST',
			body: JSON.stringify({ token }),
		});

		const data = await res.json();

		if (!res.ok) {
			toast.error(data.error);
			return;
		}

		if (!data.success) {
			toast.error('ReCAPTCHA', {
				description: 'Presunto bot detectado.',
			});
		}
	};

	useEffect(() => {
		if (state?.success) {
			setShow(true);
			form.current?.reset();
			refresh();
		}
	}, [refresh, state]);

	return (
		<form action={formAction} onSubmit={onSubmit} ref={form}>
			<h1 className='mb-2 border-b pb-2 text-2xl font-bold tracking-tight'>
				Crear cuenta
			</h1>
			<Label htmlFor='email'>Correo electrónico</Label>
			<Input
				type='email'
				placeholder='Tu correo electrónico'
				className='my-2'
				name='email'
				autoComplete='email'
			/>
			<Label htmlFor='password'>Contraseña</Label>
			<Input
				type='password'
				placeholder='Tu contraseña'
				className='my-2'
				name='password'
				autoComplete='password'
			/>
			<Label htmlFor='confirmPassword'>Confirma tu contraseña</Label>
			<Input
				type='password'
				placeholder='Confirmar contraseña'
				className='mt-2'
				name='confirmPassword'
				autoComplete='confirmPassword'
			/>
			{show && (
				<span
					className={cn(
						'my-4 flex items-center gap-x-2 text-pretty rounded p-4 text-sm',
						{
							'bg-green-200 text-green-800': state?.success,
							'bg-red-200 text-red-800': !state?.success,
						},
					)}
				>
					{state?.success ? (
						<CheckIcon className='size-6 md:size-4' aria-hidden />
					) : (
						<InfoIcon className='size-6 md:size-4' aria-hidden />
					)}{' '}
					{state?.message}
				</span>
			)}

			<SubmitButton label='Crear mi cuenta' />
		</form>
	);
};
