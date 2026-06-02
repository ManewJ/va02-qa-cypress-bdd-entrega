// ============================================================
// Step Definitions: Public Servants
// Feature: manoel.feature
// Responsible: Manoel
// Note: shared steps (page title, URL) live in commonSteps.js
// ============================================================

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import servidoresPage from '../../pages/servidores.page';

// ── Given ─────────────────────────────────────────────────────────────────────

Given('the user navigates to the servants by organ page', () => {
  servidoresPage.visitByOrgan();
});

Given('the user navigates to the servants consultation page', () => {
  servidoresPage.visitConsultation();
});

// ── When ──────────────────────────────────────────────────────────────────────

When('the user fills the name field with {string}', (name) => {
  servidoresPage.fillNameField(name);
});

When('the user clicks the search button', () => {
  servidoresPage.clickSearchButton();
});

// ── Then ──────────────────────────────────────────────────────────────────────

Then('the organs table should be displayed', () => {
  servidoresPage.shouldShowOrgansTable();
});

Then('the search form should be visible on the page', () => {
  servidoresPage.shouldShowSearchForm();
});

Then('the search results should be displayed on the page', () => {
  servidoresPage.shouldShowSearchResults();
});