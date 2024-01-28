import { test, expect } from '@playwright/test';

test('geovictoria', async ({ page }) => {
  await page.goto('https://www.geovictoria.com/es-cl/');

    await page.waitForSelector('.Navbar__button');

    await page.click('.Navbar__button');

    await page.waitForSelector('#container-user');

    await page.locator('#user').fill('162920758');

    await page.locator('#password').fill('3785Cenini%');

    await page.click('#btnLogin');

    await page.waitForTimeout(2000);

    await page.frameLocator('iframe[name="myFrame"]').getByRole('button', { name: 'PC' }).click();

    await page.waitForTimeout(2000);

    await page.frameLocator('iframe[name="myFrame"]').getByRole('button', { name: 'Cerrar Sesión' }).click();
    
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Sí' }).click();

    await page.waitForTimeout(2000);

    await page.close();
});
