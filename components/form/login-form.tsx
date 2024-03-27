'use client';

import { type ElementRef, useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';

import { useRouter } from 'next/navigation';

import { InfoIcon } from 'lucide-react';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SubmitButton } from './submit-button';
import { login } from '@/actions/auth/login';

export const LoginForm = () => {
	const [show, setShow] = useState(false);
	const form = useRef<ElementRef<'form'>>(null);
	const [state, formAction] = useFormState(login, undefined);

	const { push } = useRouter();

	useEffect(() => {
		if (!state?.success && state?.message.length) {
			setShow(true);
		}

		if (state?.success) {
			form.current?.reset();
			push('/');
		}
	}, [push, state]);

	return (
		<form ref={form} action={formAction}>
			<h1 className='mb-2 border-b pb-2 text-2xl font-bold tracking-tight'>
				Iniciar sesión
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
				className='mt-2'
				name='password'
				autoComplete='password'
			/>
			{show && (
				<span className='my-4 flex items-center gap-x-2 text-pretty rounded bg-red-200 p-4 text-sm text-red-800'>
					{!state?.success && (
						<InfoIcon className='size-6 md:size-4' aria-hidden />
					)}{' '}
					{state?.message}
				</span>
			)}
			<SubmitButton label='Ingresar' />
		</form>
	);
};
