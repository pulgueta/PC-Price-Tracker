'use client';

import { toast } from 'sonner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '../ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { randomString } from '@/lib/utils';
import { type Register, registerSchema } from '@/schemas/registerSchema';

export const RegisterForm = () => {
	const form = useForm<Register>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			confirmPassword: '',
			password: '',
		},
	});

	const { executeRecaptcha } = useGoogleReCaptcha();

	const onSubmit = form.handleSubmit(async (formData) => {
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
			return;
		}

		const register = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify(formData),
		});

		const regData = await register.json();

		if (!register.ok) {
			toast.error(data.error);
			return;
		}

		toast.success('Cuenta creada', {
			description: regData.message,
		});

		form.reset();
		form.clearErrors();
	});

	return (
		<div className='flex flex-col gap-2'>
			<h1 className='mb-2 border-b pb-2 text-2xl font-bold tracking-tight'>
				Crear cuenta
			</h1>
			<Form {...form}>
				<form onSubmit={onSubmit} className='space-y-4'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Correo electrónico</FormLabel>
								<FormControl>
									<Input
										placeholder='Tu correo electrónico'
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<Input
										placeholder='Tu contraseña'
										type='password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirma tu contraseña</FormLabel>
								<FormControl>
									<Input
										placeholder='Tu contraseña'
										type='password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						disabled={form.formState.isSubmitting}
						className='w-full'
					>
						{form.formState.isSubmitting
							? 'Creando cuenta'
							: 'Crear cuenta'}
					</Button>
				</form>
			</Form>
		</div>
	);
};
