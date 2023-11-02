import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Аспирити/);
});

test('does the modal window open', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Связаться с нами' }).first().click();
  await expect(page.getByRole('heading', {name: 'Обсудим ваш проект?'}).first()).toBeVisible();
});

