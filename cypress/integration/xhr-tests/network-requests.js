/// <reference types="Cypress" />

describe("network requests", () => {

    let message = "Unable to find comments";

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests');
    })

    
    it("Get request", () => {
        //cy.intercept('GET', '**/comments/*').as('getComment');

        cy.intercept({
            method: 'GET',
            url: '**/comments/*',
        
        }).as('getComment');
        cy.get(".network-btn").click()
        //cy.wait('@getComment').its('response.statusCode').should("eq", 200);
        //its('response.statusCode').should("eq", 200);
    })

    it("Get request", () => {
        //cy.intercept('GET', '**/comments/*').as('getComment');

        cy.intercept({
            method: 'GET',
            url: '**/comments/*'
        }, {
            body: {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "Hello world!"
            }
        }).as('getComment');
        cy.get(".network-btn").click()
        cy.wait('@getComment').then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
        })
        //its('response.statusCode').should("eq", 200);
    })

    it("POST request", () => {
        cy.intercept({
            method: 'POST',
            url: '**/comments',
        }).as('postComment');
        cy.get(".network-post").click()
        cy.wait("@postComment").should(({ request, response }) => {
            expect(request.body).to.include("email");
            expect(request.headers).to.have.property("content-type");
            expect(response.body).to.have.property("name", "Using POST in cy.intercept()");
        })
    })

    it("PUT request", () => {
        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
        }, {
            statusCode: 404,
            body: { error: message },
            delay: 500
        }).as('putComment');
        cy.get(".network-put").click()
        cy.wait("@putComment");
        cy.get(".network-put-comment").should("contain", message);
    })
})