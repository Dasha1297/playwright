import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Аспирити/);
});

test('does the modal window open', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Связаться с нами' }).first().click();
  await page.screenshot({ path: 'screenshot.png' });
  await expect(page.getByRole('heading', {name: 'Обсудим ваш проект?'}).first()).toBeInViewport()
});

test('Is postgres information visible', async({page}) => {
  await page.goto('/');
  await page.locator(`[name="postgres"]`).first().focus();
  await expect(page.getByText('Компания разработчик лидирующей СУБД в РФ').first()).toBeVisible()
})
