import loginPage from '../../support/pages/loginPage';
import selectors from '../../utils/selectors';

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
    cy.get(selectors.common.button)
      .should('be.visible')
      .should('have.css', 'background-color', 'rgb(0, 179, 176)');
  });

  it('Check button background color', () => {
    cy.get(selectors.common.button).should('have.text', 'Sign in');
  });

  it('Login user with valid credentials', { tags: '@smoke' }, () => {
    loginPage.login('danielotieno.ke+storyblok@gmail.com', 'Mombasa001!' )
    cy.url().should('include', '/#/me/spaces');
  });
});
