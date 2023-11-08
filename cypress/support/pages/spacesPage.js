import selectors from '../../utils/selectors';

class SpacePage {
  selectors = {
    addSpaceButton: '.header__buttons-container > .sb-button--primary',
  };

  navigateTo() {
    cy.visit('/#/me/spaces');
  }

  spaceHeadingContent(text) {
    cy.get(selectors.common.headerTitle).should('have.text', text);
  }

  clickAddSpaceButton() {
    cy.get(this.selectors.addSpaceButton).click();
  }
}

export default new SpacePage();
