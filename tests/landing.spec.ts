import { test, expect } from '@playwright/test';

test('Checks initial content', async ({ page }) => {
	await page.goto('/');

	const url = 'http://127.0.0.1:3000/';
	const query = 'nvidia rtx';

	expect(page.url()).toBe(url);

	const h1 = page.getByRole('heading', {
		name: 'Todos los precios de tus componentes favoritos',
		exact: true,
	});

	const h2 = page.getByRole('heading', {
		name: '¡En un solo lugar!',
		exact: true,
	});

	const h3 = page.getByRole('heading', {
		name: 'Aquí encontrarás precios de:',
		exact: true,
	});

	expect(h1).toBeVisible();
	expect(h2).toBeVisible();
	expect(h3).toBeVisible();

	await page.getByPlaceholder('Intel Core i7...').fill(query);

	await page.getByText('Selecciona una categoría').click();
	await page.getByRole('option', { name: 'Tarjetas gráficas' }).click();

	await page.getByRole('button', { name: 'Buscar' }).click();

	await page.waitForURL('**/products');

	console.log(page.url());

	// expect(page.url()).toBe(`${url}products?q=${query.replace(' ', '-')}`);
});
