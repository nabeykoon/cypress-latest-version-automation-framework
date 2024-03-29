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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => {
    //can use Global or ENV variables inside commands.js
    cy.visit("/");
})

Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_page", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
})

Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.wrap($el).click();
        }
    })
})

Cypress.Commands.add("addProductToBasket", (productName) => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text());
            cy.get(".productcart").eq(index).click();
        }
    })
})

Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment) => {
    cy.get('input[name="first_name"]').type(firstName);
    cy.get('input[name="last_name"]').type(lastName);
    cy.get('input[name="email"]').type(email);
    cy.get('textarea[name="message"]').type(comment);
    cy.get('input[type="submit"]').click();
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

//To run lighthouse using audit
import 'cypress-audit/commands';

//Report portal config
require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands');
