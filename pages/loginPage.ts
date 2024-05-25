import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly loginHeading: Locator;
  private readonly productsButton: Locator;
  private readonly invalidLoginMessage: Locator;
  private readonly inputsRequiredMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginHeading = page.getByRole('heading', { name: 'Login' });
    this.productsButton = page.getByRole('button', { name: 'Products' });
    this.invalidLoginMessage = page.getByText('Invalid email or password');
    this.inputsRequiredMessage = page.getByText(
      'Email and Password are required'
    );
  }

  async performLogin(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getProductsButton() {
    return this.productsButton;
  }

  async getInvalidLoginMessage() {
    return this.invalidLoginMessage;
  }

  async getInputsRequiredMessage() {
    return this.inputsRequiredMessage;
  }

  async getLoginHeading() {
    return this.loginHeading;
  }
}
