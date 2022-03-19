/// <reference types="Cypress" />

describe("Update Request", () => {

    it("Update an existing post via /posts API", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/7",
            body: {
                title: "This is updated title for post #7",
                author: "Im a robot"
            }
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    });
})