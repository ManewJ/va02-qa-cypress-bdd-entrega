Cypress.Commands.add('visitPortal', () => {
  cy.visit('/');
});

Cypress.Commands.add('urlShouldContain', (path) => {
  cy.url().should('include', path);
});