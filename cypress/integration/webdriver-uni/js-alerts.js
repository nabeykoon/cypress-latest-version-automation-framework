/// <reference types="Cypress" />

describe("Handle Js alerts", () => {
    it("Confirm js alert contains the correct text", () => {

        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get("#button1").click();

        //https://docs.cypress.io/api/events/catalog-of-events
        //To fire event manually
        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am an alert box!")
        })
    })

    it("Validate js confirm alert box works correctly when clicking OK", () => {

        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get("#button4").click();

        //To fire event manually
        cy.on("window:confirm", (str) => {
            return true;
        })

        cy.get("#confirm-alert-text").contains("You pressed OK!");
    })

    it("Validate js confirm alert box works correctly when clicking Cancel", () => {

        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get("#button4").click();

        //To fire event manually
        cy.on("window:confirm", (str) => {
            return false;
        })

        cy.get("#confirm-alert-text").contains("You pressed Cancel!");
    })

    it("Validate js confirm alert box using a stub", () => {

        cy.visit("http://www.webdriveruniversity.com/");
        // invoke jQuery method 'removeAttr' to remove attribute "target="_blank" which triggered the new tab opening after click on the link
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        
        const stub = cy.stub();
        cy.on("window:confirm", stub);

        cy.get("#button4").click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith("Press a button!");
        }).then(() => {
            return true;
        }).then(() => {
            cy.get("#confirm-alert-text").contains("You pressed OK!");
        })
    })
})