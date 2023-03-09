declare namespace Cypress {
    interface Chainable {
      navigate(page: string): Chainable;
    }
}