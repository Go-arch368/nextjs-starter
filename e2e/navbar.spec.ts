import { test, expect } from '@playwright/test';

  test.use({ storageState: 'storageState.json' }); // must exist

  test('shows UserButton when logged in', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.getByTestId('user-button')).toBeVisible();
  });

