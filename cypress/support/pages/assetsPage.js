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
      assetItem: '.assets-list-item__container',
      inputCheckbox: 'input[type="checkbox"]',
      secondaryButton: '.sb-button--secondary',
      deleteIcon: '[aria-label="Delete"]',
      dangerButton: '.sb-button--danger',

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

  hoverOnAsset() {
    cy.get(this.selectors.assetItem).realHover();
  }

  selectAssets() {
    this.hoverOnAsset();
    cy.get(this.selectors.inputCheckbox).click({ force: true});
    cy.get(this.selectors.secondaryButton).eq(0).click({ force: true});
  }

  deleteAsset() {
    this.selectAssets();
    cy.get(this.selectors.deleteIcon).click({ force: true});
    cy.get(this.selectors.dangerButton).click({ force: true});
  }

  notificationAlert(message) {
    cy.get(selectors.common.notificationModal).should('be.visible').should('include.text', message);
  }

  cancelAssetUpload() {
    cy.get(selectors.common.closeModalButton).click();
  }
}

export default new AssetsPage();
