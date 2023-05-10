# Cypress Page Object Model and Test Execution

This documentation provides detailed steps for creating page classes, test classes, and executing them using Cypress

## Task to complete

### Write a script to automatically test a payment in kev*n. demo page.

- [x] Go to the kev*n. web page
- [x] Accept all the cookies
- [x] Find a navigation button titled "demo"
- [x] Click on it to navigate to the demo section of the web
- [x] In the demo section, find anc click on the button with "Try it for yourself" text to go to the demo website
- [x] There, choose Bank Payment option
    - [x] Fill all the fields with data (0.01 for payment amount, your own email for email)
    - [x] Find the checkbox for terms and conditions but do not click it at first
    - [x] Choose Swedbank as the payment bank
    - [x] Click PAY
    - [x] Check if the error message for Terms and Conditions checkmark appears
    - [x] Mark the checkmark for terms and conditions
    - [x] Proceed with payment

### Bonus Points

- [ ] Ensure that the action, that leads to the redirect to the bank website happens without performing any actions on the
bank's super domain -> **Not quite sure if this is about cross-origin, if so its already handled**

- [x] When checking for the error message about Terms and Conditions, assert the color of the message text - We check
  for the color of the error message here

````javascript
cy.get('#\\:rj\\:').should('be.visible').and('have.css', 'color', 'rgb(255, 59, 48)');
````

- [x] Please make sure that URL(s) used in the test are initiated as config variable(s) - _Are read from env config
  files as variables_
- [x] Make service base URL, amount and email variables easy to change and configurable for multiple environments - _Are
  passed via env config files **cypress.config.js / cypress.dev.config.js / cypress.qa.config.js**_
- [x] Feel free to add any assertions and checks you see fit - additional page navigation checks have been added
- [x] Add additional test step to revisit kev*n. web page and assert the presence of previously accepted cookies - _
  Implemented in cypress/e2e/fintech/Cookies.cy.js_

### Submitting the task

- [x] Make sure you don't mention kev*n. anywhere in the code or repository name. - _There's no mention of the name
  which is why we'll need to pass the url via cli for test execution_
- [x] Please include how long it took for you to do the tasks. - **UI Task : 1 hour 45 mins & API Task : 1 hour : 15
  mins**
- [x] Please include README.md with instructions how to launch tests. - _It will contain all the details but as
  mentioned, we'll need to replace_ **kev*n-host-url** to trigger the test execution

```bash
npx cypress run --env URL=https://<kev*n-host-url>
```

## Pre-requisite:

Minimum configuration for optimal usage:
[NPM](https://www.npmjs.com) - 8+
[Node](https://nodejs.org/en/download/) - 16+

_Note:_

- Node installation will automatically install NPM from the above link
- You can validate the version installed via

```bash
npm --version
node --version
```

**IDE Installation:** [Visual Studio code / VS code](https://code.visualstudio.com)
Extensions suggested for optimal Cypress
usage: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code
Extensions for icon
theme: https://marketplace.visualstudio.com/search?term=icon&target=VSCode&category=All%20categories&sortBy=Relevance

## Getting started:

Clone: https://github.com/ParthibanRajasekaran/cypress-mocha.git
Open the project in your editor and open task/fintech branch in the project
Open Terminal at bottom right corner and do the below:

```bash
npm install --save-dev
```

To ensure Cypress installation type the below in your terminal:

```bash
npx cypress open
```

Verify if the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview) is launched

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test
execution

To run the tests via CLI on a headless mode

```bash
npx cypress run
```

To run the tests via CLI with an .env (cypress-cucumber-html/.env)

```bash
npx cypress run --env URL=https://<kev*n-host-url>
```

To run the tests via CLI with an .env (cypress-mocha/cypress.dev.config.js)

```bash
npx cypress run --reporter mochawesome --config-file cypress.dev.config.js
```

To prevent mocha-awesome report from overwriting

```bash
npx cypress run --env URL=https://<kev*n-host-url> --reporter=mochawesome --reporter-options overwrite=false

```

To run the tests via CLI with an env config on Chrome browser

```bash
npx cypress run --reporter mochawesome --config-file cypress.dev.config.js --browser chrome
```

To run tests with annotation @smoke

```bash
npx cypress run --reporter mochawesome --env grepTags='@smoke' --config-file cypress.dev.config.js
```

To run tests with combination of @annotation1 but without @smoke

```bash
npx cypress run --reporter mochawesome --env grepTags='@annotation1+-@smoke' --config-file cypress.dev.config.js
```

## Overview on existing test setup & design pattern adopted

## Page Classes

Page classes are JavaScript files that represent individual pages on your web application. They contain methods to
interact with the elements on the page. Here's an example:

```javascript
// HomePage.js
class HomePage {
    visit() {
        cy.visit(Cypress.env("URL"));
        return this;
    }

    // More methods to interact with the page...
}
```

## Test Classes

Test classes are where you write your actual Cypress tests. These files import and use the methods from your page
classes. Here's an example:

```javascript
// paymentsTest.js
const HomePage = require('./pages/HomePage');
const DemoPage = require('./pages/DemoPage');

describe("Payments Demo", () => {
    it("Payments verification", () => {
        HomePage.visit();
        DemoPage.clickBankPaymentButton();
// More test steps...
    });
}); 
```

## Implementing tests

- Create page classes in **cypress / pages** and add locators and implementations to it (
  Only [CSS selectors](https://saucelabs.com/resources/articles/selenium-tips-css-selectors) can be used as locators)
- Create a folder within e2e and a test class with extension **\*.cy.js** (\_Eg. XYZ.cy.js)
