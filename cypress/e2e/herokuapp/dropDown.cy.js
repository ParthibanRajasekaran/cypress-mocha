/// <reference types="cypress" />

const dropDownPage = require("../../pages/DropDownPage");
const landingPage = require("../../pages/LandingPage");

describe("Herokuapp - Drop Down Test", () => {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com");
        landingPage.navigateToDropdownPage();
    });

    it('Should select and verify Option 1', () => {
        dropDownPage.getPageHeader().then(function (pageHeader) {
            cy.log(pageHeader.text());
        });

        // Select Option 1 using the DropDownPage class
        dropDownPage.selectOptionFromDownDown(1);
    });


    it('Should select and verify Option 2', () => {
        dropDownPage.getPageHeader().then(function (pageHeader) {
            cy.log(pageHeader.text());
        });

        // Select Option 1 using the DropDownPage class
        dropDownPage.selectOptionFromDownDown(2);
    });
});
