# cypress-mocha

  <p align="left">
    <a href="https://github.com/ParthibanRajasekaran/cypress-mocha/actions">
      <img alt="Tests" src="https://github.com/ParthibanRajasekaran/cypress-cucumber/workflows/Cypress Tests/badge.svg" />
    </a>
    <br />
  </p>

Official documentation: [Cypress](https://docs.cypress.io)
To know about recent Cypress feature click [here](https://www.cypress.io/features/)

## Pre-requisite:

Minimum configuration for optimal usage:
[NPM](https://www.npmjs.com) - 8+
[Node](https://nodejs.org/en/download/) - 16+

Note:

- Node installation will automatically intall NPM from the above link
- You can validate the version installed via

```bash
npm --version
node --version
```

**IDE Installation:** [Visual Studio code / VS code](https://code.visualstudio.com)
Extensions suggested for optimal Cypress usage: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code
Extensions for icon theme: https://marketplace.visualstudio.com/search?term=icon&target=VSCode&category=All%20categories&sortBy=Relevance

## Gettings started:

Clone: https://github.com/ParthibanRajasekaran/cypress-mocha.git
Open the project in your editor
Open Terminal at bottom right corner and do the below:

```bash
npm install --save-dev
```

To ensure Cypress installation type the below in your terminal:

```bash
npx cypress open
```

Verify if the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview) is launched

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test execution

To run the tests via CLI on a headless mode
To run the tests via CLI on a headless mode

```bash
npx cypress run
```

To run the tests via CLI with an .env (cypress-cucumber-html/.env)

```bash
npx cross-env E2E_ENV= cypress run
```

To run the tests via CLI with an .env (cypress-cucumber-html/.env.dev)

```bash
npx cross-env E2E_ENV=.dev cypress run
```

To run the tests via CLI with an .env (cypress-cucumber-html/.env.qa)

```bash
npx cross-env E2E_ENV=.qa cypress run
```

To run the tests via CLI with an env config

```bash
npx cross-env E2E_ENV=.dev cypress run --browser chrome
```

To run the tests via CLI and generate a execution report

```bash
npx cross-env E2E_ENV=.dev cypress run --reporter mochawesome
```

## Implementing tests

- Create page classes in **cypress / pages** and add locators and implementations to it (Only [CSS selectors](https://saucelabs.com/resources/articles/selenium-tips-css-selectors) can be used as locators)
- Create a folder wthin e2e and a test class with extension **\*.cy.js** (\_Eg. XYZ.cy.js)

## Bonus

[Cypress Cheat Sheet](https://chercher.tech/cypress-io/cheat-sheet-cypress-io)
