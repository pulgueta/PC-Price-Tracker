'use server';

import { AuthError } from 'next-auth';

import { userExistsWithEmail } from '@/lib/auth/user-exists';
import { loginSchema } from '@/schemas/loginSchema';
import { signIn } from '@/auth';

export const login = async (
	_prev: { success: boolean; message: string } | undefined,
	data: FormData,
) => {
	const values = loginSchema.safeParse(Object.fromEntries(data.entries()));

	if (!values.success) {
		return {
			success: false,
			message: 'Verifica los datos ingresados',
		};
	}

	const { email, password } = values.data;

	const user = await userExistsWithEmail(email);

	if (!user) {
		return {
			success: false,
			message: 'El usuario no existe',
		};
	}

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: '/',
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return {
						success: false,
						message: 'Credenciales incorrectas',
					};
				default:
					return {
						success: false,
						message: 'Algo salió mal, intenta nuevamente',
					};
			}
		}

		throw error;
	}
};
