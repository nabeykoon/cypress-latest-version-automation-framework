/// <reference types="Cypress" />

describe("Verify Radio buttons via Webdriver uni", () => {
    before(() => {
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
    })
    it("check specific radio buttons", () => {
        cy.get("#radio-buttons").find("[type='radio']").first().check();
        cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
    })

    it("validate the states of specific radio buttons", () => {
        cy.get("input[value = 'lettuce']").should("not.be.checked");
        cy.get("input[value = 'pumpkin']").should("be.checked");

        cy.get("input[value = 'lettuce']").click().should("be.checked");
        cy.get("input[value = 'pumpkin']").should("not.be.checked");

        cy.get("input[value = 'cabbage']").should("be.disabled");
    })
})