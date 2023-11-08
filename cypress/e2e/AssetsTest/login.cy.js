import loginPage from '../../support/pages/loginPage';

describe('Storyblok App Login Page', function () {
  beforeEach(function () {
    loginPage.navigateTo();
  });

  it('Check Login Welcome Text', () => {
    cy.get('.login__header')
      .should('be.visible')
      .should('include.text', 'Welcome back   Sign in to Storyblok');
  });

  it('Login button text', () => {
    cy.get('.sb-button--primary')
      .should('be.visible')
      .should('have.css', 'background-color', 'rgb(0, 179, 176)');
  });

  it('Check button background color', () => {
    cy.get('.sb-button > .sb-button__label').should('have.text', 'Sign in');
  });

  it('Login user with valid credentials', { tags: '@smoke' }, () => {
    loginPage.typeUserCredentials(
      'danielotieno.ke+storyblok@gmail.com',
      'Mombasa001!',
    );
    loginPage.clickLoginButton();
    cy.url().should('include', '/#/me/spaces');
  });
});
