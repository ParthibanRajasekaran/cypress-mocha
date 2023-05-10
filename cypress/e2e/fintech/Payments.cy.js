/// <reference types="cypress" />

const homePage = require("../../pages/HomePage")
const demoPage = require("../../pages/DemoPage")

describe("Fintech - Payments Demo", () => {

    it("Payments verification", () => {
        homePage.visit()
            .acceptCookies()
            .openHamburgerMenu()
            .navigateToDemoPage()
            .visitDemoPage();

        demoPage.clickBankPaymentButton()
            .enterAmount(Cypress.env("AMOUNT"))
            .enterEmail(Cypress.env("EMAIL_ID"))
            .clickTermsAndConditions()
            .submitForm()
            .verifyErrorMessageIsDisplayedInRed()
            .checkTermsAndConditions()
            .submitForm()
            .verifyFormSubmission()
            .verifyUserIsNavigatedToBankLogin();
    });
});
