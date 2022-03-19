/// <reference types="Cypress" />

describe("Test file upload via WebDriver Uni", () => {

    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    })

    it("Verify file uploading", () => {

        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');

        cy.get("#submit-button").click();

    });

    it("Verify no file uploading scenario", () => {

        cy.get("#submit-button").click();

    });
})