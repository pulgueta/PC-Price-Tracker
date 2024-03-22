import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SubmitButton } from './submit-button';
import { register } from '@/actions/auth/register';

export const RegisterForm = () => {
	const [state, formAction] = useFormState(register, undefined);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (state) {
			setShow(true);
		}
	}, []);

	return (
		<form action={formAction}>
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
			{show && <span>{state?.message}</span>}
			<SubmitButton label='Crear mi cuenta' />
		</form>
	);
};
