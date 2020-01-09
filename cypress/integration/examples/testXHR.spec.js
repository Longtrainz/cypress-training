/// <reference types="Cypress" />


describe("Test LambdaTest Website XHR", () => {

    beforeEach("Navigate to LambdaTest", () => {
        cy.visit("https://accounts.lambdatest.com/login");
    })

    it("Perform login and verify XHR", () => {

         //Start the server
         cy.server();

         cy.route({
             method: 'GET',
             url: '/api/user/organization/team'
         }).as('team');

         cy.route({
            method: 'GET',
            url: '/api/user/organization/automation-test-summary'
        }).as('apicheck');

        cy.fixture("lambdaUser").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {
            cy.get("[name='email']").debug().type(lambdauser.UserName);
            cy.get("[name='password']").debug().type(lambdauser.Password, { log: false });
        });

        cy.get(".submit-btn").click();

        cy.get('@team').then((xhr) => {
            expect(xhr.status).to.eql(200);
            expect(xhr.response.body.data[0].role).to.eql('Admin');
            expect(xhr.response.body.data[0].username).to.eql('kullonbern');
            expect(xhr.response.body.data[0]).to.have.property('name');
            expect(xhr.response.body.data[0]).to.have.property('name', 'Kullon Bre');
        })

        cy.get('@apicheck').then((xhr) => {
            expect(xhr.status).to.eql(200);
            expect(xhr.response.body.maxMinutes).to.eq(100);
            expect(xhr.response.body).to.have.property('maxMinutes', 100);
        })

        //Implicit assertion
        cy.get("@apicheck").its('response.body').should('have.property','maxMinutes').and('eql', 100);
    })

    it('Verify LambdaTest cookies', () => {
        
        cy.fixture("lambdaUser").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {
            cy.get("[name='email']").debug().type(lambdauser.UserName);
            cy.get("[name='password").debug().type(lambdauser.Password, { log: false });
        });
        
        cy.get(".submit-btn").click();

        cy.getCookie('user_id').should('have.property','value','135925');
    })
})