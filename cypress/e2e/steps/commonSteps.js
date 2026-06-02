// ============================================================
// Step Definitions: Common / Shared Steps
// Used by: all features
// Steps that appear in more than one feature must live here ONLY
// ============================================================

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

// ── Steps compartilhados entre todas as features ───────────────────────────

Then('the page title should contain {string}', (text) => {
  cy.title().should('contain', text);
});

Then('the page URL should contain {string}', (path) => {
  cy.url().should('include', path);
});

Then('the results table should be displayed', () => {
  cy.get('table, .tabela-responsiva', { timeout: 15000 }).should('be.visible');
});

// ── Step de navegação direta — usado pelos Outlines de reposição do Pedro ──

Given('the user navigates directly to the portal page {string}', (path) => {
  cy.visit(path);
});