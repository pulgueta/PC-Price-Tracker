'use client';

import { useCallback } from 'react';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const Filter = () => {
	const { push } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const priceFilter = searchParams.get('price');

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},

		[searchParams],
	);

	const onSetPriceFilter = (value: string) => {
		push(
			`${pathname}?${createQueryString('price', value)}` as Route<string>,
		);
	};

	return (
		<aside className='size-full rounded border p-4 md:w-96'>
			<h3 className='mb-2 text-xl font-bold tracking-tight'>Filtros</h3>

			<Accordion type='multiple' className='w-full text-sm'>
				<AccordionItem value='item-1'>
					<AccordionTrigger>Precio</AccordionTrigger>
					<AccordionContent
						asChild
						className='flex items-center space-x-2'
					>
						<RadioGroup
							defaultValue={priceFilter ?? 'desc'}
							onValueChange={onSetPriceFilter}
						>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='asc' id='asc' />
								<Label htmlFor='asc'>Ascendente</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='desc' id='desc' />
								<Label htmlFor='desc'>Descendente</Label>
							</div>
						</RadioGroup>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</aside>
	);
};
