# ============================================================
# Responsible: Rodrigo
# Feature: Public Expenses
# ============================================================

Feature: Public Expenses
  As a Brazilian citizen
  I want to consult the federal government's public expenses
  So that I can monitor how public resources are being spent

  # Scenario 1 - Rodrigo
  Scenario: Access the public expenses list page
    Given the user navigates to the expenses list page
    Then the page URL should contain "/despesas/lista-consultas"
    And the page title should contain "Despesas"
    And the list of consultation options should be displayed

  # Scenario 2 - Rodrigo
  Scenario: Access expenses by organ clicking the first available option
    Given the user navigates to the expenses list page
    When the user clicks the first expense consultation option
    Then the page URL should contain "/despesas"

  # Scenario 3 - Rodrigo
  Scenario: Access the graphical panel for public expenses
    Given the user navigates to the expenses graphical panel
    Then the page URL should contain "/despesas"
    And the page title should contain "Despesas"

  # Scenario Outline 1 - Rodrigo (minimum 2 rows)
  Scenario Outline: Verify expenses data exists for different fiscal years
    Given the user navigates to the expenses graphical panel
    Then the expenses page should contain data for "<year>"

    Examples:
      | year |
      | 2023 |
      | 2024 |