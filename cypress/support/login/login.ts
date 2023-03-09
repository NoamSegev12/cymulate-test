import {User} from '../../fixtures/login/user';
import {getTestIdLocator} from '../common/create-locator';
import {signInLocator} from '../../fixtures/login/locators';

Cypress.Commands.add('login', (user: User) => {
    cy.visit('/').then(() => {
      Object.entries(user).forEach(([key, value]) => {
        cy.get(getTestIdLocator(key)).type(value);
      });
      cy.get(getTestIdLocator(signInLocator)).click();
    });
});