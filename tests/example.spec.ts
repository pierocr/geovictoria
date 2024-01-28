import { test, expect } from '@playwright/test';

test('geovictoria', async ({ page }) => {

    const startTime = new Date(); // Obtener la hora de inicio

    await page.goto('https://www.geovictoria.com/es-cl/');

    await page.waitForSelector('.Navbar__button');

    await page.click('.Navbar__button');

    await page.waitForSelector('#container-user');

    await page.locator('#user').fill('162920758');

    await page.locator('#password').fill('3785Cenini%');

    await page.click('#btnLogin');

    await page.frameLocator('iframe[name="myFrame"]').getByRole('button', { name: 'PC' }).click();

    await page.waitForTimeout(2000);

    await page.frameLocator('iframe[name="myFrame"]').getByRole('button', { name: 'Cerrar Sesión' }).click();
    
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Sí' }).click();

    const endTime = new Date(); // Obtener la hora de finalización

    // Imprimir la hora de inicio y finalización en la consola
    console.log(`Hora de inicio: ${startTime.toLocaleTimeString()}`);
    console.log(`Hora de finalización: ${endTime.toLocaleTimeString()}`);

    await page.close();
});
