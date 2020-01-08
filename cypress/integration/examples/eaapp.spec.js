/// <reference types="Cypress" />


describe("Test EA Application", () => {

    before("Login to application", () => {
        cy.visit("/");
        cy.fixture('eauser').as('user');
    })

    it("Login application", () => {
        cy.get("#loginLink").invoke('text').as('linkText');

        cy.get('@user').then((user) => {
            cy.login(Cypress.env("username"), user.Password);
        })
        
        cy.get('@linkText').then(($x) => {
            expect($x).is.eql('Login');
        })
    
        cy.contains("Employee List").click();
        cy.get('.table').find('tr > td');
    
    
        cy.get('.table').find('tr').as("rows");
    
        cy.get('@rows').then(($row) => {
            cy.wrap($row).click({ multiple: true })
        })
    
        cy.get('.table').find('tr').contains('John').parent().contains('Benefits').click();
    
        cy.wrap({ name: 'John' }).should('have.property', 'name').and('eq', 'John');
    })
})













   // cy.contains("Login").click();

    // cy.contains("Login").then(($link) => {
    //     const linkText = $link.text();
    //     expect(linkText).to.eql('Login');
    // }).click();

    // cy.get("#loginLink").then(($link) => {
    //    return $link.text();
    // }).as('linkText');

    // cy.get("#loginLink").then(($link) => $link.text()).as('linkText');