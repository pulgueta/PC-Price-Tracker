import { randomUUID } from 'crypto';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const randomString = () =>
	randomUUID().replace(/[0-9]/g, '').replaceAll('-', '');
