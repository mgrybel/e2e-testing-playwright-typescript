import { Locator, Page } from '@playwright/test';

export class NavigationPage {
  private readonly page: Page;
  private readonly signInButton: Locator;
  private readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.createAccountButton = page.getByRole('button', {
      name: 'Create an account',
    });
  }

  async navigateToHomePage() {
    await this.page.goto('/');
  }

  async navigateToLoginPage() {
    await this.navigateToHomePage();
    await this.signInButton.click();
  }

  async navigateToRegisterPage() {
    await this.navigateToHomePage();
    await this.createAccountButton.click();
  }
}
