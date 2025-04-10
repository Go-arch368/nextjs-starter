import { test, expect } from '@playwright/test';

test.describe('Navbar Component', () => {

  // test('should toggle mobile menu on and off', async ({ page }) => {
  //   await page.goto('http://localhost:3000');  // Update with your local server URL

  //   // Ensure the mobile menu is initially closed
  //   await expect(page.locator('[aria-label="Toggle mobile menu"]')).toBeVisible();
  //   await expect(page.locator('ul.flex.flex-col')).toHaveCount(0);  // Ensure menu is closed initially

  //   // Click to open the mobile menu
  //   await page.click('[aria-label="Toggle mobile menu"]');
  //   await expect(page.locator('ul.flex.flex-col')).toBeVisible();  // Ensure menu is open

  //   // Click again to close the mobile menu
  //   await page.click('[aria-label="Toggle mobile menu"]');
  //   await expect(page.locator('ul.flex.flex-col')).toHaveCount(0);  // Ensure menu is closed again
  // });

  test('should show categories dropdown on hover', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Hover over the "Browse All Categories" button
    const browseButton = page.locator('button:has-text("Browse All Categories")');
    await browseButton.hover();

    // Wait for the dropdown to be visible
    const dropdown = page.locator('ul.absolute');
    await expect(dropdown).toBeVisible();
    await expect(dropdown.locator('li')).toHaveCount(5);  // Adjust to match the number of categories
  });

  test('should show main nav dropdown on hover', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Hover over the "Groceries" item in the navbar
    const groceriesItem = page.locator('a:has-text("Groceries")');
    await groceriesItem.hover();

    // Wait for the dropdown to be visible
    const dropdown = page.locator('ul.absolute');
    await expect(dropdown).toBeVisible();
    await expect(dropdown.locator('li')).toHaveCount(5);  // Adjust based on your dropdown items
  });

  // test('should show nested dropdown on hover over "Shop" menu', async ({ page }) => {
  //   await page.goto('http://localhost:3000');

  //   // Hover over "Shop" dropdown item
  //   const shopItem = page.locator('a:has-text("Shop")');
  //   await shopItem.hover();

  //   // Wait for the nested dropdown to appear
  //   const nestedDropdown = page.locator('div.flex');
  //   await expect(nestedDropdown).toBeVisible();

  //   // Check the nested dropdown categories
  //   await expect(nestedDropdown.locator('div')).toHaveCount(3);  // Adjust based on your categories
  // });

  // test('should show Sign In button when signed out', async ({ page }) => {
  //   await page.goto('http://localhost:3000');

  //   // Ensure that the "Sign In" button is visible when the user is signed out
  //   const signInButton = page.locator('button:has-text("Sign In")');
  //   await expect(signInButton).toBeVisible();
  // });

  // test('should show user button when signed in', async ({ page }) => {
  //   await page.goto('http://localhost:3000');

  //   // Simulate signing in (you may need to mock Clerk's sign-in)
  //   const signInButton = page.locator('button:has-text("Sign In")');
  //   await signInButton.click();  // Trigger sign-in

  //   // After signing in, the "User Button" should be visible
  //   const userButton = page.locator('[aria-label="User button"]');
  //   await expect(userButton).toBeVisible();
  // });

});
