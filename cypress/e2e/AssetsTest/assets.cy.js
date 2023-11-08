import assetsPage from '../../support/pages/assetsPage';
import loginPage from '../../support/pages/loginPage';
import selectors from '../../utils/selectors';

describe('Storyblok App Assets Section', function () {
  beforeEach(function () {
    loginPage.navigateTo();
    loginPage.login();
    assetsPage.clickSpace();
  });

  it('Select Space and navigate to dashboard', () => {
    cy.get(selectors.common.headerTitle)
      .should('be.visible')
      .should('include.text', 'Test Space');
    cy.url().should('include', '/dashboard');
  });

  context('Assets Page', () => {
    beforeEach(() => {
      assetsPage.navigeteTo();
    });

    it('Navigate to Assets Page', () => {
      cy.get(selectors.common.headerTitle)
        .should('be.visible')
        .should('include.text', 'Assets');
    });

    it.only('Upload public asset', { tags: '@smoke' }, () => {
      assetsPage.uploadPublicAsset();
      assetsPage.submitButton();
    });
  });
});
