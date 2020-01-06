/// <reference types="Cypress" />

describe("Testing of EA App", () => {
    beforeEach("Call a particular it block", () => {
        cy.visit("http://www.executeautomation.com/site/");
    })

    it("Testing EA site for assertion", () => {
    // cy.get("[aria-label='jump to slide 2']", {timeout: 10000}).should('have.class', 'ls-nav-active');

        cy.get("[aria-label='jump to slide 2']", {timeout: 10000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        });
    });

    it("Testing EA site for assertion with hooks", () => {
        // cy.get("[aria-label='jump to slide 2']", {timeout: 10000}).should('have.class', 'ls-nav-active');
    
        cy.get("[aria-label='jump to slide 2']", {timeout: 10000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        });
    });
    
    
    // xit("Login application", () => {
    //     // Visiting website
    //     cy.visit("http://eaapp.somee.com/");

    //     // cy.contains("Login").click();

    //     // cy.contains("Login").then(($link) => {
    //     //     const linkText = $link.text();
    //     //     expect(linkText).to.eql('Login');
    //     // }).click();

    //     // cy.get("#loginLink").then(($link) => {
    //     //    return $link.text();
    //     // }).as('linkText');

    //     // cy.get("#loginLink").then(($link) => $link.text()).as('linkText');

    //     cy.get("#loginLink").invoke('text').as('linkText');

    //     cy.contains('Login').click();

    //     cy.get('@linkText').then(($x) => {
    //         expect($x).is.eql('Login');
    //     })

    //     cy.url().should("include", "/Account/Login");

    //     cy.get("#UserName").type("admin");

    //     cy.get("#Password").type("password");

    //     cy.get("[value='Log in']").click();

    //     cy.contains("Employee List").click();

    //     cy.get('.table').find('tr > td');

    
    //     cy.get('.table').find('tr').as("rows");

    //     cy.get('@rows').then(($row) => {
    //         cy.wrap($row).click({ multiple: true })
    //     })

    //     cy.get('.table').find('tr').contains('John').parent().contains('Benefits').click();

    //     cy.wrap({ name: 'John' }).should('have.property', 'name').and('eq', 'John');
    // })
})