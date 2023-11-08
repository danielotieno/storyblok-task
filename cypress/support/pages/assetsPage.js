import selectors from '../../utils/selectors';

class AssetsPage {
  selectors = {
    spaceItem: '.base-space-card',
    assetsMenuLink: '#app-Assets',
    fileUpload: '#file',
  };

  clickSpace() {
    cy.get(this.selectors.spaceItem).eq(0).click();
  }

  navigeteTo() {
    cy.get(this.selectors.assetsMenuLink).click();
  }

  submitButton() {
    cy.get(selectors.common.submitButton).click();
  }

  uploadPublicAsset() {
    cy.get(selectors.common.button).click({multiple: true});
    cy.get(this.selectors.fileUpload).invoke('show').selectFile(
      'cypress/fixtures/public_assets.webp',
    );
  }


}

export default new AssetsPage();
