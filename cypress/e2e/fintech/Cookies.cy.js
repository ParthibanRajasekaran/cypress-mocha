/// <reference types="cypress" />

const homePage = require("../../pages/HomePage")

describe("Fintech - Handle Cookies", () => {

    it("Cookies handling verification", () => {
        homePage.visit()
            .acceptCookies()

        homePage.visit()
            .verifyCookiesBannerIsNotVisible()
    });
});
