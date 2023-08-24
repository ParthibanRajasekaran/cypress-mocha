/// <reference types="cypress" />

const loginPage = require("../../pages/LoginPage");
const landingPage = require("../../pages/LandingPage");

describe("Herokuapp - Login", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit(Cypress.env("url"));
    cy.visit(Cypress.env("URL"));
    landingPage.navigateToFormAuthentificationPage();
  });

  it("verify successful login",{ tags: '@smoke' }, () => {
    loginPage.getPageHeader().then(function (pageHeader) {
      cy.log(pageHeader.text());
    });

    loginPage.enterUsername(Cypress.env("USERNAME"));
    loginPage.enterPassword(Cypress.env("PASSWORD"));
    loginPage.clickLoginButton();
  });

  it("verify unsuccessful login", () => {
    loginPage.getPageHeader().then(function (pageHeader) {
      cy.log(pageHeader.text());
    });

    loginPage.enterUsername("testuser");
    loginPage.enterPassword("DummyPassword");
    loginPage.clickLoginButton();
    loginPage.getLoginFailureMessage().invoke('text').then((text) => {
      cy.log(text);
    });
  });
});