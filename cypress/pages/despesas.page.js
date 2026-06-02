// ============================================================
// Page Object: Despesas (Public Expenses)
// Responsible: Rodrigo
// ============================================================

class DespesasPage {
  static URL_LIST  = '/despesas/lista-consultas';
  static URL_PANEL = '/despesas';

  // ── Selectors ──────────────────────────────────────────────────────────────
  get resultsTable() {
    return cy.get('table, .tabela-responsiva').first();
  }

  get consultationOptionLinks() {
    return cy.get('a[href*="/despesas/"]');
  }

  // ── Actions ────────────────────────────────────────────────────────────────
  visitList() {
    cy.visit(DespesasPage.URL_LIST);
  }

  visitPanel() {
    cy.visit(DespesasPage.URL_PANEL);
  }

  clickConsultationOption(optionName) {
    // O link pode ser um card/div clicável — force:true para garantir
    cy.contains(optionName).first().click({ force: true });
  }

  selectYear(year) {
    // O portal usa input hidden + botões customizados para o ano, não <select>
    // Estratégia: clicar no botão de seleção de ano e escolher o ano desejado
    cy.get('[class*="ano"], [id*="ano"], [data-coluna="ano"]')
      .first()
      .click({ force: true });
    cy.contains(year).first().click({ force: true });
  }

  // ── Assertions ─────────────────────────────────────────────────────────────
  shouldHaveUrlContaining(path) {
    cy.url().should('include', path);
  }

  shouldHaveTitleContaining(text) {
    cy.title().should('contain', text);
  }

  shouldShowConsultationOptions() {
    this.consultationOptionLinks.should('have.length.greaterThan', 0);
  }

  shouldShowResultsTable() {
    this.resultsTable.should('be.visible');
  }

  shouldShowYearData(year) {
    cy.get('body').should('contain', year);
  }
}

export default new DespesasPage();