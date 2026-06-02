# ============================================================
# Responsible: Manoel
# Feature: Public Servants
# Site: https://portaldatransparencia.gov.br/servidores
# ============================================================

Feature: Public Servants
  As a Brazilian citizen
  I want to consult information about federal public servants
  So that I can exercise social oversight over the government payroll

  # Scenario 1 - Manoel
  Scenario: Access the servants list by organ
    Given the user navigates to the servants by organ page
    Then the page URL should contain "/servidores/orgao"
    And the page title should contain "Servidores"
    And the organs table should be displayed

  # Scenario 2 - Manoel
  Scenario: Access the servants search page by employment bond
    Given the user navigates to the servants consultation page
    Then the page URL should contain "/servidores/consulta"
    And the search form should be visible on the page

  # Scenario 3 - Manoel
  Scenario: Search for a servant by name
    Given the user navigates to the servants consultation page
    When the user fills the name field with "João"
    And the user clicks the search button
    Then the search results should be displayed on the page

  # Scenario Outline 1 - Manoel (minimum 2 rows)
  Scenario Outline: Search for servants using different names
    Given the user navigates to the servants consultation page
    When the user fills the name field with "<servantName>"
    And the user clicks the search button
    Then the search results should be displayed on the page

    Examples:
      | servantName |
      | Silva       |
      | Santos      |
      | Oliveira    |