/* eslint-disable no-undef */

import selectors from '../../utils/selectors';

class AssetsPage {
  constructor() {
    this.selectors = {
      spaceItem: '.base-space-card',
      assetsMenuLink: '#app-Assets',
      fileUpload: '#file',
      toggleInput: '.sb-toggle',
    };
  }

  clickSpace() {
    cy.get(this.selectors.spaceItem).eq(0).click();
  }

  navigeteTo() {
    cy.get(this.selectors.assetsMenuLink).click();
  }

  clickSubmitButton() {
    cy.get(selectors.common.submitButton).click();
  }

  uploadPublicAsset() {
    cy.get(selectors.common.button).click({ multiple: true });
    cy.get(this.selectors.fileUpload)
      .invoke('show')
      .selectFile('cypress/fixtures/public_assets.webp');
  }

  uploadPrivateAsset() {
    cy.get(selectors.common.button).click({ multiple: true });
    cy.get(this.selectors.fileUpload)
      .invoke('show')
      .selectFile('cypress/fixtures/private_assets.webp');
      cy.get(this.selectors.toggleInput).click();
  }

  cancelAssetUpload() {
    cy.get(selectors.common.closeModalButton).click();
  }
}

export default new AssetsPage();
