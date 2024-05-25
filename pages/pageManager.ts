import { Page } from '@playwright/test';

import { NavigationPage } from './navigationPage';
import { RegisterPage } from './registerPage';
import { LoginPage } from './loginPage';

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly registerPage: RegisterPage;
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.registerPage = new RegisterPage(this.page);
    this.loginPage = new LoginPage(this.page);
  }

  getNavigationPage() {
    return this.navigationPage;
  }

  getRegisterPage() {
    return this.registerPage;
  }

  getLoginPage() {
    return this.loginPage;
  }
}
