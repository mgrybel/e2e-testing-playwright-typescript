import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.beforeEach(async ({ page }) => {
  const pageManager = new PageManager(page);
  pageManager.getNavigationPage().navigateToLoginPage();
});

test.describe('Positive scenarios', () => {
  test('Log in to the app with valid customer credentials @smoke @regression', async ({
    page,
  }) => {
    const pageManager = new PageManager(page);
    await pageManager
      .getLoginPage()
      .performLogin('customer@test.com', 'test123');
    expect(pageManager.getLoginPage().getProductsButton()).toBeTruthy();
  });
});

test.describe('Negative scenarios', () => {
  test('A customer cannot log in with invalid credentials @regression', async ({
    page,
  }) => {
    const pageManager = new PageManager(page);
    await pageManager.getLoginPage().performLogin('test@test.com', 'test123');
    expect(pageManager.getLoginPage().getInvalidLoginMessage()).toBeTruthy();
  });

  test('A customer must fill all fields @regression', async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.getLoginPage().performLogin('', 'test123');
    expect(pageManager.getLoginPage().getInputsRequiredMessage()).toBeTruthy();
  });
});
