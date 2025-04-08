import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should show loading state initially', async ({ page }) => {
    await page.goto('/about');
    
    
    await page.evaluate(() => {
      Object.defineProperty(window, '__clerk_is_loaded', {
        get: () => false,
        configurable: true
      });
    });

    await expect(page.getByText('Loading...')).toBeVisible();
  });

  test('should show sign in message when user is not signed in', async ({ page }) => {
    await page.goto('/about');
    
    
    await page.evaluate(() => {
      Object.defineProperty(window, '__clerk_is_loaded', {
        get: () => true,
        configurable: true
      });
      Object.defineProperty(window, '__clerk_is_signed_in', {
        get: () => false,
        configurable: true
      });
    });

    await expect(page.getByText('Please sign in to view this page')).toBeVisible();
    await expect(page.getByText('Please sign in to view this page')).toHaveClass(/text-red-600/);
  });

});