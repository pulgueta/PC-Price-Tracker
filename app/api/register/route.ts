import { type NextRequest, NextResponse } from 'next/server';

import { createUser } from '@/lib/auth/create-user';
import { userExistsWithEmail } from '@/lib/auth/user-exists';
import { registerSchema } from '@/schemas/registerSchema';

export const POST = async (req: NextRequest) => {
	const data = await req.json();

	const body = registerSchema.safeParse(data);

	if (!body.success) {
		return NextResponse.json(
			{ error: 'Datos insuficientes para crear la cuenta' },
			{ status: 400 },
		);
	}

	const { email, password } = body.data;

	const userExists = await userExistsWithEmail(email);

	if (userExists) {
		return NextResponse.json(
			{ error: 'El correo ya está siendo usado.' },
			{ status: 400 },
		);
	}

	await createUser({ email, password });

	return NextResponse.json(
		{ message: 'Tu usuario ha sido creado.' },
		{ status: 201 },
	);
};
