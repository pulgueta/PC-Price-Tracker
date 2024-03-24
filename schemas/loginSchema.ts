import { TypeOf, object, string } from 'zod';

export const loginSchema = object({
	email: string({
		required_error: 'El correo electrónico no puede estar vacío',
	}).email({ message: 'Ingresa un correo electrónico válido' }),
	password: string({
		required_error: 'La contraseña no puede estar vacía',
	}).min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type Login = TypeOf<typeof loginSchema>;
