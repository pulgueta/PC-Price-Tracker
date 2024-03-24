import { TypeOf, object, string } from 'zod';

export const registerSchema = object({
	email: string()
		.min(6, 'El correo electrónico debe tener al menos 6 caracteres.')
		.email({ message: 'Debes ingresar un correo electrónico válido' }),
	password: string().min(
		6,
		'La contraseña debe ser de al menos 6 caracteres.',
	),
	confirmPassword: string().min(
		6,
		'La contraseña debe ser de al menos 6 caracteres.',
	),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
	message: 'Las contraseñas deben coincidir',
	path: ['confirmPassword'],
});

export type Register = TypeOf<typeof registerSchema>;
