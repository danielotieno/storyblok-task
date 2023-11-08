
class AssetsPage {
  selectors = {
    spaceItem: '.base-space-card',
    assetsMenuLink: '#app-Assets',
  };

  clickSpace() {
    cy.get(this.selectors.spaceItem).eq(0).click();
  }

  navigeteTo() {
    cy.get(this.selectors.assetsMenuLink).click();
  }

  login(email, password) {
    this.typeUserCredentials(email, password);
    this.clickLoginButton();
  }
}

export default new AssetsPage();
