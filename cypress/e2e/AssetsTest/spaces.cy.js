import loginPage from '../../support/pages/loginPage';
import spacesPage from '../../support/pages/spacesPage';
import selectors from '../../utils/selectors';

describe('Storyblok App Spaces Page', function () {
  beforeEach(function () {
    spacesPage.navigateTo();
    loginPage.login();
  });

  it('Check Spaces Heading', () => {
    spacesPage.spaceHeadingContent('Spaces');
  });

  it('Add a new space', { tags: '@smoke' }, () => {
    spacesPage.clickAddSpaceButton();
    cy.url().should('include', '/#/me/spaces/new');
    cy.get(selectors.common.headerTitle).should(
      'have.text',
      'Create your new space',
    );
    spacesPage.createNewSpace();
  });
});
