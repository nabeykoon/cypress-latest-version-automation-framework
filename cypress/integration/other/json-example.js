/// <reference types="Cypress" />

//Returns error due to two domains accessed within same test.
describe("JSON Object", () => {
    it("JSON object examples", () => {
        const exampleObject = { "key1": "Jim", "key2": "Brayan" }
        const exampleArrayOfValues = ["Lulu", "Hal", "Harry"]
        const exampleArrayOfObjects = [
            {"key1": "Luke"},
            {"key2": "Hugh"},
            {"key3": "Jackman"}
        ]

        const users = {
            "firstName": "Kasun",
            "lastName": "Perera",
            "age": 20,
            "students": [
                {
                    "firstName": "Jagath",
                    "lastName": "Kumara"
                },
                {
                    "firstName": "Wimal",
                    "lastName": "Silva"
                }
            ]
        }

        cy.log(exampleObject["key1"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key1);

        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[1]);

        cy.log(users.lastName);
        cy.log(users.students[0].firstName);

        cy.log(exampleArrayOfObjects[0].key1)
        cy.log(exampleArrayOfObjects[2].key3)
    })
})