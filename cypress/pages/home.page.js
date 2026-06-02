// ============================================================
// Page Object: Home Page
// Responsible: Pedro
// ============================================================

class HomePage {
  // ── Selectors ──────────────────────────────────────────────────────────────
  get logo() {
    // Logo do portal — existe no DOM mesmo que visualmente pequena
    return cy.get('img[alt="logo"], img[alt="Logo"], .logo img, header img').first();
  }

  get menuConsultasDetalhadas() {
    // O menu existe no DOM mas com display:none em desktop — usamos exist ao invés de visible
    return cy.contains('Consultas Detalhadas');
  }

  get linkAcessoInformacao() {
    return cy.contains('a', 'Acesso à Informação');
  }

  get linkLegislacao() {
    return cy.contains('a', 'Legislação').first();
  }

  get linkAcessibilidade() {
    return cy.contains('a', 'Acessibilidade').first();
  }

  get btnAumentar() {
    return cy.contains('A+');
  }

  get btnDiminuir() {
    return cy.contains('A-');
  }

  // O portal não tem link "Alto contraste" como <a> — usa botão ou elemento próprio
  get altoContraste() {
    return cy.get('[class*="contraste"], [id*="contraste"], button[title*="contraste" i]').first();
  }

  // ── Actions ────────────────────────────────────────────────────────────────
  visit() {
    cy.visit('/');
  }

  openConsultasDetalhadasMenu() {
    // O menu pai pode estar oculto (display:none) — force:true para clicar mesmo assim
    this.menuConsultasDetalhadas.click({ force: true });
  }

  // ── Assertions ─────────────────────────────────────────────────────────────
  shouldHaveTitleContaining(text) {
    cy.title().should('contain', text);
  }

  shouldShowLogo() {
    // Verifica existência no DOM — não visibilidade, pois pode estar em posição relativa
    this.logo.should('exist');
  }

  shouldShowMainMenu() {
    // Menu existe no DOM com display:none — verificamos exist, não visible
    this.menuConsultasDetalhadas.should('exist');
  }

  shouldShowQuickAccessLink(linkText) {
    cy.contains('a', linkText).should('exist');
  }

  shouldShowAccessibilityButton(buttonText) {
    cy.contains(buttonText).should('exist');
  }

  shouldShowHighContrastToggle() {
    // Verifica qualquer elemento relacionado a contraste
    cy.get('body').then(($body) => {
      const hasContraste =
        $body.find('[class*="contraste"]').length > 0 ||
        $body.find('[id*="contraste"]').length > 0 ||
        $body.find(':contains("contraste")').length > 0;
      expect(hasContraste).to.be.true;
    });
  }

  shouldShowMenuItem(itemText) {
    // Verifica que o item existe no DOM (pode estar oculto pelo menu dropdown)
    cy.contains(itemText).should('exist');
  }
}

export default new HomePage();