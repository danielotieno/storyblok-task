class LoginPage {
  selectors = {
    emailInput: '#email',
    passwordInput: '#password',
  };

  navigateTo() {
    cy.visit('/#/login');
  }

  // checkLoginPage() {
  //   cy.get(selectors.login.loginForm).should('be.visible');
  //   cy.get(selectors.login.submitButton)
  //     .should('be.visible', { timeout: 20000 })
  //     .should('have.text', ' Login ');
  // }

  typeUserCredentials(email, password) {
    cy.get(this.selectors.emailInput).clear().type(email);
    cy.get(this.selectors.passwordInput).clear().type(password);
  }

  clickLoginButton() {
    button.click(messages.login.loginBtnText);
  }

  clickRestLinkButton() {
    button.click('Get reset link');
  }
}

export default new LoginPage();
