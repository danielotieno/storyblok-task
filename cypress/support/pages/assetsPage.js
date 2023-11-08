/* eslint-disable no-undef */

import selectors from '../../utils/selectors';

class AssetsPage {
  constructor() {
    this.selectors = {
      spaceItem: '.base-space-card',
      assetsMenuLink: '#app-Assets',
      fileUpload: '#file',
      toggleInput: '.sb-toggle',
      addMoreButton: '.sb-button--tertiary',
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

  uploadAsset(asset) {
    cy.get(selectors.common.button).click({ multiple: true });
    cy.get(this.selectors.fileUpload).invoke('show').selectFile(asset);
  }

  uploadPrivateAsset() {
    this.uploadAsset('cypress/fixtures/private_assets.webp');
    cy.get(this.selectors.toggleInput).click();
  }

  uploadMultipleAssets() {
    this.uploadAsset('cypress/fixtures/multi_one.webp');
    cy.get(this.selectors.addMoreButton).click({ multiple: true, force: true });
    cy.get(this.selectors.fileUpload)
      .invoke('show')
      .selectFile('cypress/fixtures/drag_drop.webp', { force: true });
  }

  cancelAssetUpload() {
    cy.get(selectors.common.closeModalButton).click();
  }
}

export default new AssetsPage();
