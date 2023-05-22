// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const CryptoJS = require('crypto-js');

Cypress.Commands.add("waitUntilElementIsVisible", (selector) => {
  cy.log("Waiting until the element " + selector + " is displayed");
  cy.get(selector, { timeout: 10000 }).should("be.visible");
});

Cypress.Commands.add("waitUntilElementIsInVisible", (selector) => {
  cy.log("Waiting until the element " + selector + " is no more visible");
  cy.get(selector, { timeout: 10000 }).should("not.be.visible");
});

Cypress.Commands.add('encrypt', (message) => {
  const encrypted = CryptoJS.AES.encrypt(message, Cypress.env('KEY'));
  return encrypted.toString();
});

Cypress.Commands.add('decrypt', (cipherText) => {
  const bytes  = CryptoJS.AES.decrypt(cipherText, Cypress.env('KEY'));
  return bytes.toString(CryptoJS.enc.Utf8);
});

