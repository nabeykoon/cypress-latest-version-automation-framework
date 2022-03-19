class HomePage {

    visitHomepage() {
        cy.visit(Cypress.env("webdriverUni_homepage"), {timeout: 60000}); //timeout parameter overide global pageLoadTimeout value
    }

    clickOn_Contactus_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({timeout: 8000});
    }

}
export default HomePage; 