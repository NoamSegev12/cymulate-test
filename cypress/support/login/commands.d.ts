import {User} from '../../fixtures/login/user';

declare global {
  namespace Cypress {
    interface Chainable {
      login(user: User): Chainable;
    }
  }
}