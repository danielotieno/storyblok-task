class LoginPage {
  selectors = {
    emailInput: '#email',
    passwordInput: '#password',
    button: '.sb-button > .sb-button__label',
  };

  navigateTo() {
    cy.visit('/#/login');
  }

  typeUserCredentials(email, password) {
    cy.get(this.selectors.emailInput).clear().type(email);
    cy.get(this.selectors.passwordInput).clear().type(password);
  }

  clickLoginButton() {
    cy.get(this.selectors.button).click();
  }
}

export default new LoginPage();
