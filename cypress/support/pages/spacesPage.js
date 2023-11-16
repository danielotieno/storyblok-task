/* eslint-disable no-undef */
import selectors from '../../utils/selectors';

class SpacePage {
  constructor() {
    this.selectors = {
      addSpaceButton: '.header__buttons-container > .sb-button--primary',
      spaceNameField: '#space-name',
      quickStartName: '.quickstart__space-name',
    };
  }

  navigateTo() {
    cy.visit('/#/me/spaces');
  }

  spaceHeadingContent(text) {
    cy.get(selectors.common.headerTitle).should('have.text', text);
  }

  clickAddSpaceButton() {
    cy.get(this.selectors.addSpaceButton).click();
  }

  createNewSpace() {
    cy.get(this.selectors.spaceNameField).clear().type('Test Space');
    cy.get(selectors.common.button).eq(1).click();
    cy.get(this.selectors.quickStartName).should('have.text', 'Test Space');
  }
}

export default new SpacePage();
