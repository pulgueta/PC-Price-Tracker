'use client';

import { useFormStatus } from 'react-dom';

import { Loader2Icon } from 'lucide-react';

import { Button } from '../ui/button';

export const SubmitButton = ({ label }: { label: string }) => {
	const { pending } = useFormStatus();

	return (
		<Button type='submit' className='my-4 w-full' disabled={pending}>
			{pending ? <Loader2Icon className='size-4 animate-spin' /> : label}
		</Button>
	);
};
