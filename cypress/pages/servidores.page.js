// ============================================================
// Page Object: Servidores (Public Servants)
// Responsible: Manoel
// ============================================================

class ServidoresPage {
  static URL_BY_ORGAN     = '/servidores/orgao';
  static URL_CONSULTATION = '/servidores/consulta';

  get organsTable() {
    return cy.get('table, .tabela-responsiva').first();
  }

  get searchForm() {
    return cy.get('form, .filtros, .consulta-container, [class*="filtro"]').first();
  }

  get nameInput() {
    return cy.get('#nome');
  }

  visitByOrgan() {
    cy.visit(ServidoresPage.URL_BY_ORGAN);
  }

  visitConsultation() {
    cy.visit(ServidoresPage.URL_CONSULTATION);
  }

  fillNameField(name) {
    this.nameInput.clear({ force: true }).type(name, { force: true });
  }

  clickSearchButton() {
    // O portal não usa <form> — submete pressionando Enter no campo
    this.nameInput.type('{enter}', { force: true });
  }

  shouldHaveUrlContaining(path) {
    cy.url().should('include', path);
  }

  shouldHaveTitleContaining(text) {
    cy.title().should('contain', text);
  }

  shouldShowOrgansTable() {
    this.organsTable.should('be.visible');
  }

  shouldShowSearchForm() {
    cy.get('#nome').should('exist');
  }

  shouldShowSearchResults() {
    cy.url().should('include', '/servidores');
  }
}


export default new ServidoresPage();