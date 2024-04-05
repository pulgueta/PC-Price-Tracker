import { type NextRequest, NextResponse } from 'next/server';

import { createUser } from '@/lib/auth/create-user';
import { userExistsWithEmail } from '@/lib/auth/user-exists';

export const POST = async (req: NextRequest) => {
	const body = await req.json();

	const { email } = body;

	const userExists = await userExistsWithEmail(email);

	if (userExists) {
		return NextResponse.json(
			{ error: 'El correo ya está siendo usado.' },
			{ status: 400 },
		);
	}

	await createUser(email);

	return NextResponse.json(
		{ error: 'El usuario ha sido creado.' },
		{ status: 201 },
	);
};
