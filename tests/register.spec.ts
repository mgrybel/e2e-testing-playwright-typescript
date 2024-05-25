import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { PageManager } from '../pages/pageManager';

test.beforeEach(async ({ page }) => {
  const pageManager = new PageManager(page);
  pageManager.getNavigationPage().navigateToRegisterPage();
});

test('@smoke @regression Create a new customer account', async ({ page }) => {
  const pageManager = new PageManager(page);
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();
  await pageManager
    .getRegisterPage()
    .performRegistration(randomName, randomEmail, 'test123', 'test123');
  expect(pageManager.getLoginPage().getLoginHeading()).toBeTruthy();
});
