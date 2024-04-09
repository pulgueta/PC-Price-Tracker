import { test, expect } from '@playwright/test';

import { landing, buttons, categories, placeholders } from '@/i18n/es.json';

test('Checks initial content', async ({ page }) => {
	await page.goto('/');

	const url = process.env.BASE_URL as string;

	expect(page.url()).toBe(url);

	const h1 = page.getByRole('heading', {
		name: landing.heading,
		exact: true,
	});

	const h2 = page.getByRole('heading', {
		name: landing.subheading,
		exact: true,
	});

	const h3 = page.getByRole('heading', {
		name: landing.storesHeading,
		exact: true,
	});

	expect(h1).toBeVisible();
	expect(h2).toBeVisible();
	expect(h3).toBeVisible();

	expect(
		page.getByPlaceholder(placeholders.inputs.queryPlaceholder),
	).toBeVisible();

	expect(page.getByText(buttons.combobox)).toBeVisible();
});

test('Inserts a query and goes to products page', async ({ page }) => {
	await page.goto('/');

	const url = process.env.BASE_URL as string;
	const query = 'nvidia rtx';
	const encodedQuery = encodeURIComponent(query);

	expect(page.url()).toBe(url);

	await page
		.getByPlaceholder(placeholders.inputs.queryPlaceholder)
		.fill(query);

	await page.getByText(buttons.combobox).click();
	await page.getByRole('option', { name: categories.gpu.label }).click();

	await page
		.getByRole('button', { name: buttons.searchButton })
		.click({ force: true, noWaitAfter: true });

	await page.waitForURL(
		`http://127.0.0.1:3000/products?q=${encodedQuery}&category=${categories.gpu.value}`,
	);

	expect(page.url()).toBe(
		`${url}products?q=${encodedQuery}&category=${categories.gpu.value}`,
	);
});
