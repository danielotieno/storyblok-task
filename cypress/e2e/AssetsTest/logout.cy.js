/* eslint-disable no-undef */
import loginPage from '../../support/pages/loginPage';

describe('User Logout Action', function () {
  beforeEach(function () {
    loginPage.navigateTo();
    loginPage.login();
  });

  it('Should be able to logout user', () => {
    cy.get('.sb-sidebar__bottom > .sb-sidebar-item').eq(1).click();
    cy.get('.sidebar-user-menu__btn-logout').click();
    cy.url().should('include', '/#/login');
  });
});
