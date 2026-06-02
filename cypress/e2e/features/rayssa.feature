# ============================================================
# Responsible: Rayssa
# Feature: Public Revenues and Contracts
# ============================================================

Feature: Public Revenues and Contracts
  As a Brazilian citizen
  I want to consult revenues and contracts of the federal government
  So that I can understand where public funds come from and how they are contracted

  # Scenario 1 - Rayssa
  Scenario: Access the public revenues consultation page
    Given the user navigates to the revenues consultation page
    Then the page URL should contain "/receitas/consulta"
    And the page title should contain "Receita"
    And the revenues consultation form should be visible

  # Scenario 2 - Rayssa
  Scenario: Consult revenues without additional filters
    Given the user navigates to the revenues consultation page
    Then the revenues page should have loaded successfully

  # Scenario 3 - Rayssa
  Scenario: Access the contracts consultation page
    Given the user navigates to the contracts consultation page
    Then the page URL should contain "/contratos/consulta"
    And the page title should contain "Contratos"
    And the contracts search form should be visible

  # Scenario Outline 1 - Rayssa (minimum 2 rows)
  Scenario Outline: Verify revenues page loads for different consultation URLs
    Given the user navigates to the revenues "<path>" page
    Then the revenues page should have loaded successfully

    Examples:
      | path    |
      | consulta |
      | receitas |