import i18nCategories from '@/i18n/es.json';

export const categories = [
	{
		label: i18nCategories.categories.cpu,
		value: i18nCategories.categories.cpu,
	},
	{
		label: i18nCategories.categories.gpu,
		value: i18nCategories.categories.gpu,
	},
	{
		label: i18nCategories.categories.psu,
		value: i18nCategories.categories.psu,
	},
	{
		label: i18nCategories.categories.case,
		value: i18nCategories.categories.case,
	},
	{
		label: i18nCategories.categories.ram,
		value: i18nCategories.categories.ram,
	},
	{
		label: i18nCategories.categories.mobo,
		value: i18nCategories.categories.mobo,
	},
] as const;
