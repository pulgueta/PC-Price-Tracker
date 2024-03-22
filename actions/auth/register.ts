'use server';

import { registerSchema } from '@/schemas/registerSchema';
import { userExistsWithEmail } from '@/lib/auth/user-exists';
import { createUser } from '@/lib/auth/create-user';

export const register = async (
	_prev: { success: boolean; message: string } | undefined,
	e: FormData,
) => {
	const values = registerSchema.safeParse(Object.fromEntries(e.entries()));

	if (!values.success) {
		return {
			success: false,
			message: 'Verifica los datos ingresados',
		};
	}

	const { email } = values.data;

	const userExists = await userExistsWithEmail(email);

	if (userExists) {
		return { success: false, message: 'El correo ya está siendo usado.' };
	}

	await createUser(values.data);

	return {
		success: true,
		message: 'Cuenta creada, ahora debes iniciar sesión.',
	};
};
