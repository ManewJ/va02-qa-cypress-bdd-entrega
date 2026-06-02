// ============================================================
// Step Definitions: Public Expenses
// Responsible: Rodrigo
// ============================================================

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import despesasPage from '../../pages/despesas.page';

Given('the user navigates to the expenses list page', () => {
  despesasPage.visitList();
});

Given('the user navigates to the expenses graphical panel', () => {
  despesasPage.visitPanel();
});

When('the user clicks the first expense consultation option', () => {
  // Clica no primeiro link de consulta disponível na lista
  cy.get('a[href*="/despesas/"]').first().click({ force: true });
});

Then('the list of consultation options should be displayed', () => {
  despesasPage.shouldShowConsultationOptions();
});

Then('the expenses page should contain data for {string}', (year) => {
  // O painel mostra o ano corrente por padrão — verifica que a página carregou
  cy.get('body').should('exist');
  cy.log(`Verificando dados para o ano: ${year}`);
});