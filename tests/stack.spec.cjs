const { test, expect } = require('@playwright/test');
const path = require('path');

test('Додавання елемента через інтерфейс', async ({ page }) => {
    
    const filePath = `file://${path.resolve('index.html')}`;
    await page.goto(filePath); 

    await page.fill('#elementInput', 'Test Item');
    await page.click('button:has-text("Push")');

   
    await expect(page.locator('body')).toContainText('Test Item');
});