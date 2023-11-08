import selectors from "../../utils/selectors";

class LoginPage {
  selectors = {
    emailInput: '#email',
    passwordInput: '#password',
  };

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

  login(email, password) {
    this.typeUserCredentials(email, password);
    this.clickLoginButton();
  }
}

export default new LoginPage();
