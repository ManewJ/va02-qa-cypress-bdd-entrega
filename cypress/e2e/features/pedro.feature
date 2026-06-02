# ============================================================
# Responsible: Pedro
# Feature: Home Navigation
# ============================================================

Feature: Home Navigation
  As a Brazilian citizen
  I want to navigate through the Transparency Portal homepage
  So that I can find public information about government spending

  # Scenario 1 - Pedro
  Scenario: Verify homepage loads correctly
    Given the user accesses the Transparency Portal
    Then the page title should contain "Portal da Transparência"
    And the portal logo should be visible
    And the main navigation menu should be present in the DOM

  # Scenario 2 - Pedro
  Scenario: Verify quick access links at the top of the page
    Given the user accesses the Transparency Portal
    Then the quick access link "Acesso à Informação" should be visible
    And the quick access link "Legislação" should be visible
    And the quick access link "Acessibilidade" should be visible

  # Scenario 3 - Pedro
  Scenario: Verify accessibility buttons are present
    Given the user accesses the Transparency Portal
    Then the accessibility button "A+" should be present on the page
    And the accessibility button "A-" should be present on the page
    And the high contrast option should be present on the page

  # Scenario Outline 1 - Pedro
  Scenario Outline: Verify main menu items exist in the page
    Given the user accesses the Transparency Portal
    Then the menu item "<menuItem>" should exist in the page

    Examples:
      | menuItem                  |
      | Despesas Públicas         |
      | Receitas Públicas         |
      | Servidores e Pensionistas |
      | Contratos                 |

  # Scenario Outline 2 - Pedro (reposição)
  Scenario Outline: Verify portal section pages load with correct title
    Given the user navigates directly to the portal page "<path>"
    Then the page title should contain "<expectedTitle>"

    Examples:
      | path                      | expectedTitle |
      | /despesas/lista-consultas | Despesas      |
      | /receitas/consulta        | Receita       |
      | /servidores/orgao         | Servidores    |

  # Scenario Outline 3 - Pedro (reposição)
  Scenario Outline: Verify portal section pages have correct URL
    Given the user navigates directly to the portal page "<path>"
    Then the page URL should contain "<expectedPath>"

    Examples:
      | path                      | expectedPath              |
      | /despesas/lista-consultas | /despesas/lista-consultas |
      | /receitas/consulta        | /receitas/consulta        |
      | /contratos/consulta       | /contratos/consulta       |