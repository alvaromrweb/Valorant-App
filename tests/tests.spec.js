import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv'

dotenv.config()

const baseUrl = process.env.VITE_BASE_URL

test('Try non valid user#tag', async ({ page }) => {
  await page.goto(baseUrl);

  await page.locator('input#search').type('asd123');
  await page.getByRole('button', { type: 'submit' }).click();
  await expect(page.getByTestId('error')).toBeVisible()
});

test('Try valid user#tag from example and get result', async ({ page }) => {
  await page.goto(baseUrl);

  await page.locator('small').click();
  const searchValue = await page.locator('input#search').inputValue()
  await expect(searchValue).toContain('#');
  await page.getByRole('button', { type: 'submit' }).click();
  await expect(page.getByTestId('playerCard')).not.toBeEmpty()
  await expect(page.getByTestId('matchList')).not.toBeEmpty()
});
