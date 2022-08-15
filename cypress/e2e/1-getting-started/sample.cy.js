/// <reference types="cypress" />

describe("Basic operations", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://demoqa.com/");
  });

  it("Filling forms", () => {
    cy.get(".category-cards svg").eq(1).click();

    cy.get(":nth-child(2) > .element-list > .menu-list > #item-0")
      .should("exist")
      .click();

    cy.get("h5").then(($formPageHeader) => {
      const pageHeader = $formPageHeader.text();
      cy.log(pageHeader);
    });

    cy.waitUntilElementIsVisible("#firstName");
    cy.get("#firstName", { timeout: 1000 }).type("firstName");

    cy.waitUntilElementIsVisible("#lastName");
    cy.get("#lastName").type("lastName");

    cy.waitUntilElementIsVisible("#userEmail");
    cy.get("#userEmail").type(Cypress.env("emailId"));
  });
});
