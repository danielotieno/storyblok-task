import loginPage from "../../support/pages/loginPage";

describe('Storyblok App Login', function () {
  beforeEach(function () {
    loginPage.navigateTo();
  });

  it('Check Heading Text', () => {
    cy.get('.login__header')
      .should('be.visible')
      .should('include.text', 'Welcome back   Sign in to Storyblok');
  });

  it('Login button text', () => {
    cy.get('.sb-button > .sb-button__label')
      .should('be.visible')
      .should('have.text', 'Sign in');
  });

  it('Login user with valid credentials', { tags: '@smoke' }, () => {
    loginPage.typeUserCredentials(
      'otienodaniel.ke+storyblok@gmail.com',
      'Mombasa001!',
    );
  });

  // it(
  //   'Login - Client - Email - Account Exists @test=AH-15933',
  //   { tags: ['@smoke', '@login'] },
  //   () => {
  //     testUtils.loginApplication(
  //       Cypress.env('default_email'),
  //       Cypress.env('default_password'),
  //     );
  //   },
  // );
});
