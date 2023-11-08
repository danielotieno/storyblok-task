/* eslint-disable no-undef */
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

    it('Upload public asset', { tags: '@smoke' }, () => {
      assetsPage.uploadAsset('cypress/fixtures/public_assets.webp');
      assetsPage.clickSubmitButton();
    });

    it('Upload private asset', { tags: '@smoke' }, () => {
      assetsPage.uploadPrivateAsset();
      assetsPage.clickSubmitButton();
    });

    it.only('Upload multiple assets', { tags: '@smoke' }, () => {
      assetsPage.uploadMultipleAssets();
      assetsPage.clickSubmitButton();
    });

    it('Cancel asset upload', () => {
      assetsPage.uploadPublicAsset();
      assetsPage.cancelAssetUpload();
    });
  });
});
