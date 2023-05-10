/// <reference types="cypress" />

class HomePage {
    visit() {
        cy.visit(Cypress.env("URL"));
        return this;
    }

    verifyCookiesBannerIsNotVisible() {
        cy.get('button[data-testid="CookieBanner-accept-all"]').should('not.exist')
        return this;
    }

    acceptCookies() {
        cy.get('button[data-testid="CookieBanner-accept-all"]').click();
        return this;
    }

    openHamburgerMenu() {
        cy.get("[data-testid='Header2-hamburger']").click();
        return this;
    }

    navigateToDemoPage() {
        cy.get("li[data-testid='navbar-demo'] a").click();
        cy.url().should('include', '/bank-payment-flows');
        return this;
    }

    visitDemoPage() {
        cy.get("a[data-testid='visit-demo-page-button']").invoke('removeAttr', 'target').click();
        return this;
    }
}

module.exports = new HomePage();