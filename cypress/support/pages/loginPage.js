/* eslint-disable no-undef */
import selectors from '../../utils/selectors';

class LoginPage {
  constructor() {
    this.selectors = {
      emailInput: '#email',
      passwordInput: '#password',
    };
  }

  navigateTo() {
    cy.visit('/#/login');
  }

  typeUserCredentials(email, password) {
    cy.get(this.selectors.emailInput).clear().type(email);
    cy.get(this.selectors.passwordInput).clear().type(password);
  }

  clickLoginButton() {
    cy.get(selectors.common.button).click();
  }

  login() {
    this.typeUserCredentials(
      'danielotieno.ke+storyblok@gmail.com',
      'Mombasa001!',
    );
    this.clickLoginButton();
  }

  invalidLogin() {
    this.typeUserCredentials(
      'danielotieno.ke+storyblok@gmail.com',
      'Mombasa001!1',
    );
    this.clickLoginButton();
  }
}

export default new LoginPage();
