/// <reference types="Cypress" />

describe("Get Request", () => {
    var result;

    it("Validate status code of the GET request", () => {
        result = cy.request("http://localhost:3000/posts");
        result.its("status").should("equal", 200);
    });

    it("Validate GET request contains the correct key and value", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body);

            expect(body[0]).has.property("title", "Example json-server");
            expect(body[1]).has.property("author", "Nadeera123 - PUT");

            body.forEach(element => {
                expect(element).to.have.all.keys("id", "title", "author")
                cy.log("Author: " + element["author"] + " & Title: " + element["title"])

            });
        })
    });
})