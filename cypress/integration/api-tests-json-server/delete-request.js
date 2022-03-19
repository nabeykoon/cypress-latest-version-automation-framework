/// <reference types="Cypress" />

describe("Delete Request", () => {

    it("Delete a existing post via /posts API", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/6"
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    });
})