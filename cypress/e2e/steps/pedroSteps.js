// ============================================================
// Step Definitions: Home Navigation
// Responsible: Pedro
// ============================================================

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/home.page';

Given('the user accesses the Transparency Portal', () => {
  homePage.visit();
});

When('the user opens the {string} menu', (_menuName) => {
  homePage.openConsultasDetalhadasMenu();
});

Then('the portal logo should be visible', () => {
  homePage.shouldShowLogo();
});

Then('the main navigation menu should be present in the DOM', () => {
  homePage.shouldShowMainMenu();
});

Then('the quick access link {string} should be visible', (linkText) => {
  homePage.shouldShowQuickAccessLink(linkText);
});

Then('the accessibility button {string} should be present on the page', (buttonText) => {
  homePage.shouldShowAccessibilityButton(buttonText);
});

Then('the high contrast option should be present on the page', () => {
  homePage.shouldShowHighContrastToggle();
});

Then('the menu item {string} should exist in the page', (itemText) => {
  homePage.shouldShowMenuItem(itemText);
});
