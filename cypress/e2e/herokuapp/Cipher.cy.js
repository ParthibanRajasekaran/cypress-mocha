/// <reference types="cypress" />

describe('AES Encryption and Decryption', () => {
    it.skip('should encrypt and then decrypt',{ tags: '@smoke' } , () => {
       // The text to be encrypted.
        const message = "Hello, world!";

        // Encrypt the text.
        cy.encrypt(message).then((cipherText) => {
            cy.log("Encrypted Text is "+message);
            // Now, let's decrypt it.
            cy.decrypt(cipherText).then((originalText) => {
                // Validate the original message and decrypted message are same
                expect(originalText).to.equal(message);
                cy.log("Original Text is "+originalText);
                cy.log("Decrypted Text is "+message);
            });
        });
    });
});


