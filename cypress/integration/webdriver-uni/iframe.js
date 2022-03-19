/// <reference types="Cypress" />

describe("Handling iFrame and Models", () => {
    it("Handle webdriver uni iFrame and Model", ()=>{
        
        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#iframe").invoke("removeAttr", "target").click();

        cy.get('#frame').then(($frame) => {
            const body = $frame.contents().find("body");
            cy.wrap(body).as("iframe");
        })

        cy.get("@iframe").find("#button-find-out-more").click();
        cy.get("@iframe").find("#myModal").as("model");
        cy.get("@model").should(($expectedText) => {
            const text = $expectedText.text();
            expect(text).to.include("Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops");
        })

        cy.get("@model").contains("Close").click();
    })
})