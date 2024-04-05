'use client';

import type { FormEvent } from 'react';

import { toast } from 'sonner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SubmitButton } from './submit-button';

import { randomString } from '@/lib/utils';

export const RegisterForm = () => {
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

	return (
		<form onSubmit={onSubmit}>
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

			<SubmitButton label='Crear mi cuenta' />
		</form>
	);
};
