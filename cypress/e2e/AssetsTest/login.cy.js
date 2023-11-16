/* eslint-disable no-undef */
import assetsPage from '../../support/pages/assetsPage';
import loginPage from '../../support/pages/loginPage';
import selectors from '../../utils/selectors';

describe('Storyblok App Login Page', function () {
  beforeEach(function () {
    loginPage.navigateTo();
  });

  it('Should have a welcome login text', () => {
    cy.get(selectors.common.loginHeader)
      .should('be.visible')
      .should('include.text', 'Welcome back   Sign in to Storyblok');
  });

  it('Should be able to check login button bg color', () => {
    cy.get(selectors.common.button)
      .should('be.visible')
      .should('have.css', 'background-color', 'rgb(0, 179, 176)');
  });

  it('Should be able to check login button text', () => {
    cy.get(selectors.common.button).should('have.text', 'Sign in');
  });

  it('Should be able to logged in user with valid credentials', { tags: '@smoke' }, () => {
    loginPage.login();
    cy.url().should('include', '/#/me/spaces');
  });

   it(
     'Should not be able to logged in user with wrong credentials',
     { tags: '@smoke' },
     () => {
       loginPage.invalidLogin();
       assetsPage.notificationAlert('Wrong username or password');
     },
   );
});
