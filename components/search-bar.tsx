'use client';

import { type FC, type ElementRef, type FormEvent, useState } from 'react';

import { useRouter } from 'next/navigation';

import { CheckIcon, ChevronsUpDown, SearchIcon } from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from './ui/command';
import { categories } from '@/constants/categories';
import { cn } from '@/lib/utils';

type $SearchBar = {
	isHome?: boolean;
};

export const SearchBar: FC<$SearchBar> = ({ isHome = false }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const { push } = useRouter();

	const onSubmit = (e: FormEvent<ElementRef<'form'>>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const q = formData.get('q') as string;

		if (q.length < 3) return;
		if (value.length < 3) return;

		push(`/products?q=${q}&category=${value}`);
	};

	return (
		<form
			className={cn('items-center gap-4', {
				'flex w-full flex-col md:w-auto md:flex-row': isHome,
				'flex flex-col': !isHome,
			})}
			onSubmit={onSubmit}
		>
			<Input className='w-full' name='q' placeholder='Intel Core i7...' />

			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='outline'
						role='combobox'
						aria-expanded={open}
						className={cn('justify-between', {
							'w-full md:w-auto': isHome,
							'w-full': !isHome,
						})}
					>
						{value
							? categories.find(
									(category) => category.value === value,
								)?.label
							: 'Selecciona una categoría'}
						<ChevronsUpDown className='ml-2 size-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-full p-0'>
					<Command>
						<CommandInput placeholder='Buscar categoría...' />
						<CommandList>
							<CommandEmpty>
								No se encontró la categoría
							</CommandEmpty>
							<CommandGroup>
								{categories.map((category) => (
									<CommandItem
										key={category.value}
										value={category.value}
										onSelect={(currentValue) => {
											setValue(
												currentValue === value
													? ''
													: currentValue,
											);
											setOpen(false);
										}}
									>
										<CheckIcon
											className={cn(
												'mr-2 h-4 w-4',
												value === category.value
													? 'opacity-100'
													: 'opacity-0',
											)}
										/>
										{category.label}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>

			<Button
				type='submit'
				className={cn({
					'w-full md:w-auto': isHome,
					'w-full': !isHome,
				})}
			>
				<SearchIcon className='mr-2 size-4' />
				Buscar
			</Button>
		</form>
	);
};
