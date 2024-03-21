import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const LoginForm = () => {
	return (
		<form>
			<h1 className='mb-2 border-b pb-2 text-2xl font-bold tracking-tight'>
				Iniciar sesión
			</h1>
			<Label htmlFor='email'>Correo electrónico</Label>
			<Input
				type='email'
				placeholder='Tu correo electrónico'
				className='my-2'
				name='email'
			/>
			<Label htmlFor='password'>Contraseña</Label>
			<Input
				type='password'
				placeholder='Tu contraseña'
				className='mt-2'
				name='password'
			/>
			<Button type='submit' className='my-4 w-full'>
				Autenticarme
			</Button>
		</form>
	);
};
