class ContactUsPage {
    contactForm_Submission(firstName, lastName, email, comment) {
        cy.get('input[name="first_name"]').type(firstName);
        cy.get('input[name="last_name"]').type(lastName);
        cy.get('input[name="email"]').type(email);
        cy.get('textarea[name="message"]').type(comment);
        cy.get('input[type="submit"]').click();
        cy.screenshot("Capture Contact Us form submission");
    }
}
export default ContactUsPage;