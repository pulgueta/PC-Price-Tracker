/* eslint-disable no-unused-vars */
export {};

declare global {
	export type Prettify<T> = {
		[K in keyof T]: T[K];
	} & unknown;

	export type CPU = {
		name: string;
		price: number | null;
		core_count: number;
		core_clock: number;
		boost_clock: number | null;
		tdp: number;
		graphics: null | string;
		smt: boolean;
	};

	export type GPU = {
		name: string;
		price: number | null;
		chipset: string;
		memory: number;
		core_clock: number | null;
		boost_clock: number | null;
		color: Color | null;
		length: number | null;
	};

	export enum Color {
		Beige = 'Beige',
		Black = 'Black',
		BlackBeige = 'Black / Beige',
		BlackBlack = 'Black / Black',
		BlackBlue = 'Black / Blue',
		BlackClear = 'Black / Clear',
		BlackGold = 'Black / Gold',
		BlackGray = 'Black / Gray',
		BlackGreen = 'Black / Green',
		BlackOrange = 'Black / Orange',
		BlackPurple = 'Black / Purple',
		BlackRed = 'Black / Red',
		BlackSilver = 'Black / Silver',
		BlackWhite = 'Black / White',
		BlackYellow = 'Black / Yellow',
		Blue = 'Blue',
		BlueBlack = 'Blue / Black',
		BlueGold = 'Blue / Gold',
		BlueGray = 'Blue / Gray',
		BlueRed = 'Blue / Red',
		BlueSilver = 'Blue / Silver',
		BlueWhite = 'Blue / White',
		Brown = 'Brown',
		BrownBeige = 'Brown / Beige',
		BrownBlack = 'Brown / Black',
		ClearBlack = 'Clear / Black',
		CopperBlack = 'Copper / Black',
		Gold = 'Gold',
		GoldBlack = 'Gold / Black',
		GoldBlue = 'Gold / Blue',
		GoldWhite = 'Gold / White',
		Gray = 'Gray',
		GrayBlack = 'Gray / Black',
		GrayBlue = 'Gray / Blue',
		Green = 'Green',
		GreenBlack = 'Green / Black',
		GreenBlue = 'Green / Blue',
		GreenSilver = 'Green / Silver',
		OrangeBlack = 'Orange / Black',
		Pink = 'Pink',
		PurpleBlue = 'Purple / Blue',
		PurpleGreen = 'Purple / Green',
		Red = 'Red',
		RedBlack = 'Red / Black',
		RedBlue = 'Red / Blue',
		RedSilver = 'Red / Silver',
		RedWhite = 'Red / White',
		Silver = 'Silver',
		SilverBlack = 'Silver / Black',
		SilverBlue = 'Silver / Blue',
		SilverGreen = 'Silver / Green',
		SilverRed = 'Silver / Red',
		SilverWhite = 'Silver / White',
		SilverYellow = 'Silver / Yellow',
		TranslucentBlack = 'Translucent Black',
		TranslucentBlue = 'Translucent Blue',
		Transparent = 'Transparent',
		TransparentBlack = 'Transparent / Black',
		White = 'White',
		WhiteBlack = 'White / Black',
		WhiteBlue = 'White / Blue',
		WhiteGray = 'White / Gray',
		WhiteOrange = 'White / Orange',
		WhitePink = 'White / Pink',
		WhiteRed = 'White / Red',
		WhiteSilver = 'White / Silver',
		YellowBlack = 'Yellow / Black',
	}
}
