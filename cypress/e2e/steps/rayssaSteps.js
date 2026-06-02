// ============================================================
// Step Definitions: Public Revenues and Contracts
// Responsible: Rayssa
// Note: shared steps (page title, URL) live in commonSteps.js
// ============================================================

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { receitasPage, contratosPage } from '../../pages/receitasContratos.page';

// ── Given ─────────────────────────────────────────────────────────────────────

Given('the user navigates to the revenues consultation page', () => {
  receitasPage.visit();
});

Given('the user navigates to the contracts consultation page', () => {
  contratosPage.visit();
});

Given('the user navigates to the revenues {string} page', (path) => {
  // Navega para subpáginas de receitas (consulta, painel, etc.)
  const url = path === 'receitas' ? '/receitas' : `/receitas/${path}`;
  cy.visit(url);
});

// ── When ──────────────────────────────────────────────────────────────────────

When('the user clicks the consult revenues button', () => {
  receitasPage.clickConsult();
});

When('the user selects the year {string} in the revenues filter', (year) => {
  receitasPage.selectYear(year);
});

// ── Then ──────────────────────────────────────────────────────────────────────

Then('the revenues consultation form should be visible', () => {
  receitasPage.shouldShowConsultationForm();
});

Then('the revenues results table should be displayed', () => {
  receitasPage.shouldShowResultsTable();
});

Then('the revenues page should have loaded successfully', () => {
  // Verifica que a página carregou sem erros
  cy.get('body').should('exist');
  cy.url().should('include', 'receita');
});

Then('the contracts search form should be visible', () => {
  contratosPage.shouldShowSearchForm();
});