/// <reference types="Cypress" />

describe("Verify endpoint /comments using post, get & Delete requests ", () => {
    var bodyOfComments = new Array();
    let randomBody = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);
    let randomId = Math.floor(Math.random() * 1000 + 1);


    it("Create a new comment via /comments endpoint", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                body: randomBody,
                postId: randomId
            }
        }).then(response => {
            expect(response.status).to.eql(201);
        })
    });

    it("Validate body of latest comment created using POST request", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(element => {
                bodyOfComments.push(element["body"])
            });
        }).then(() => {
            var latestComments = bodyOfComments[bodyOfComments.length - 1]
            expect(latestComments).to.eq(randomBody);
        })
    });

    it("Delete a existing post via /comments endpoint", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/" + bodyOfComments.length
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    });
})