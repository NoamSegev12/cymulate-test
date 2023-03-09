import {getTestLabelLocator} from '../common/create-locator';

Cypress.Commands.add('navigate', (page: string) => {
  cy.get(getTestLabelLocator(page)).click();
})