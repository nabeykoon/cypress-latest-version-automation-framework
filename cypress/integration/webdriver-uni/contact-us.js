import HomePage from '../../support/pageObjects/webdriver-uni/home-page';
import ContactUsPage from '../../support/pageObjects/webdriver-uni/contact-us-page';

/// <reference types="Cypress" />

describe("Test contact Us form via WebDriverUniversity", () => {
    Cypress.config('defaultCommandTimeout, 10000');

    const homePage = new HomePage();
    const contactUsPage = new ContactUsPage();

    before(() => {
        cy.fixture('example.json').then((data) => {
            //this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        //cy.visit(Cypress.env("webdriverUni_homepage") + "/Contact-Us/contactus.html");

        homePage.visitHomepage();
        homePage.clickOn_Contactus_Button();
        //cy.pause();
    })

    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        //Custom command
        //cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "This is a submission of test contact us page")

        //using Page object

        contactUsPage.contactForm_Submission(data.first_name, data.last_name, data.email, "This is a submission of test contact us page");
        cy.xpath('//div[@id="contact_reply"]//h1').should('have.text', "Thank You for your Message!");//cy.pause() to debug before assertion.
    })
    //run only one test 'it.only' 
    it("Should NOT be able to submit a submission via Contact Us form due to all mandatory fields", {browser: 'electron'}, () => {
        //Custom command
        //cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), Cypress.env("last_name"), " ", "This is a submission of test contact us page")
        if (Cypress.isBrowser('firfox')) {

        } else {
            contactUsPage.contactForm_Submission(Cypress.env("first_name"), Cypress.env("last_name"), " ", "This is a submission of test contact us page");
            cy.get('body').contains('Error: Invalid email address', { timeout: 8000 })
        }
    })
    // OVERIDE ENV VARIABLE USING NPM COMMAND : $(npm bin)/cypress run --browser chrome --spec cypress/integration/webdriver-uni/contact-us.js --env first_name=Tim
})