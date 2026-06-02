import './commands';

Cypress.on('uncaught:exception', () => {
  return false;
});

beforeEach(() => {
  cy.viewport(1280, 800);
});