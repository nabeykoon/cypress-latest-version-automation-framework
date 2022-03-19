/// <reference types="Cypress" />

describe("Test file upload via WebDriver Uni", () => {

    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    })

    it("Verify file uploading", () => {

        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"

                },
                {
                    uploadType: "input"
                }
            )

        })

        cy.get("#submit-button").click();

    });

    it("Verify no file uploading scenario", () => {

        cy.get("#submit-button").click();

    });
})