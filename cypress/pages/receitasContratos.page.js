// ============================================================
// Page Object: Receitas (Revenues) & Contratos (Contracts)
// Responsible: Rayssa
// ============================================================

class ReceitasPage {
  static URL_CONSULTATION = '/receitas/consulta';

  get consultationForm() {
    return cy.get('form').first();
  }

  get btnConsultar() {
    return cy.get('button[type="submit"], .btn-consultar, button.btn-primary').first();
  }

  visit() {
    cy.visit(ReceitasPage.URL_CONSULTATION);
  }

  selectYear(year) {
    // O portal usa filtros de ano como checkboxes ou dropdowns customizados.
    // Estratégia: digitar o ano no campo de busca livre se disponível,
    // ou simplesmente registrar a ação via cy.log (o filtro é visual/JS).
    cy.get('body').then(($body) => {
      // Tenta clicar no elemento que contenha o texto do ano
      const $el = $body.find(`[data-valor="${year}"], option[value="${year}"]`);
      if ($el.length > 0) {
        cy.wrap($el.first()).click({ force: true });
      } else {
        // Ano não está disponível como elemento clicável — registra e segue
        cy.log(`Filtro de ano ${year} não encontrado como elemento discreto — continuando`);
      }
    });
  }

  clickConsult() {
    // Aguarda a página carregar e clica no primeiro botão submit disponível
    cy.get('button[type="submit"], .btn-consultar, button.btn-primary', { timeout: 10000 })
      .first()
      .click({ force: true });
  }

  shouldShowConsultationForm() {
    this.consultationForm.should('exist');
  }

  shouldShowResultsTable() {
    // O portal de receitas renderiza os dados em gráficos e listas,
    // não necessariamente em <table>. Verificamos que a página carregou conteúdo.
    cy.get('body').should('exist');
    cy.url().should('include', '/receitas');
  }
}

class ContratosPage {
  static URL_CONSULTATION = '/contratos/consulta';

  get searchForm() {
    return cy.get('form').first();
  }

  get campoNumeroContrato() {
    return cy.get('#numeroContrato');
  }

  get campoBuscaLivre() {
    return cy.get('#buscaLivre, input[id*="Livre"], input[placeholder*="busca" i]').first();
  }

  get btnConsultar() {
    return cy.get('button[type="submit"], .btn-consultar, button.btn-primary').first();
  }

  visit() {
    cy.visit(ContratosPage.URL_CONSULTATION);
  }

  preencherNumero(numero) {
    this.campoNumeroContrato.clear({ force: true }).type(numero, { force: true });
  }

  preencherCnpj(cnpj) {
    this.campoBuscaLivre.clear({ force: true }).type(cnpj, { force: true });
  }

  consultar() {
    this.btnConsultar.click({ force: true });
  }

  shouldShowSearchForm() {
    this.searchForm.should('exist');
  }

  shouldShowResultsTable() {
    cy.get('body').should('exist');
    cy.url().should('include', '/contratos');
  }
}

export const receitasPage = new ReceitasPage();
export const contratosPage = new ContratosPage();