/// <reference types="cypress" />

class DemoPage {
    clickBankPaymentButton() {
        cy.get("a[data-testid='bank-payment-btn']").click();
        return this;
    }

    enterAmount(amount) {
        cy.get("input[data-testid='amount-input']").type(amount);
        return this;
    }

    enterEmail(email) {
        cy.get("input[data-testid='email-input']").type(email);
        return this;
    }

    clickTermsAndConditions() {
        cy.get("[for=':rc:']").click();
        return this;
    }

    submitForm() {
        cy.get("form[data-testid='bank-payment-form'] > button").click();
        return this;
    }

    verifyErrorMessageIsDisplayedInRed() {
        cy.get('#\\:rj\\:').should('be.visible').and('have.css', 'color', 'rgb(255, 59, 48)');
        return this;
    }

    checkTermsAndConditions() {
        cy.get("[data-testid='checkmark-icon']").click();
        return this;
    }

    verifyFormSubmission() {
        cy.url().should('include', '/agreement');
        return this;
    }

    verifyUserIsNavigatedToBankLogin() {
        cy.origin("https://login.swedbank.lt", () => {
            cy.url().should('include', '/auth/oauth/v1/authorize');
        });
        return this;
    }
}

module.exports = new DemoPage();