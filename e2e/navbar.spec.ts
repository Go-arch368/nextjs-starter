import { test, expect } from '@playwright/test';


test('should show categories dropdown on hover', async ({ page }) => {
  await page.goto('http://localhost:3000');

  
  const browseButton = page.locator('button:has-text("Browse All Categories")');
  await browseButton.hover();

  
  const dropdown = page.locator('ul.absolute');
  await expect(dropdown).toBeVisible();
  await expect(dropdown.locator('li')).toHaveCount(5);  
});

test('should show main nav dropdown on hover', async ({ page }) => {
  await page.goto('http://localhost:3000');

 
  const groceriesItem = page.locator('a:has-text("Groceries")');
  await groceriesItem.hover();

 
  const dropdown = page.locator('ul.absolute');
  await expect(dropdown).toBeVisible();
  await expect(dropdown.locator('li')).toHaveCount(5);  
});
