/// <reference types="Cypress" />

context("Test API from the Fake JSON Server", () => {

    beforeEach("DELETE before creating a new value", () => {
          cy.request({
            method:'DELETE',
            url:'http://localhost:3000/posts/2',
            failOnStatusCode:false
        }).then((x) => {
            expect(x.body).to.be.empty
        })
    });

    it("Test GET functionality of JSON Server", ()=>{
        cy.request("http://localhost:3000/posts/1").its('body').should('have.property','id', 1);
    })

    it("Test POST functionality of JSON Server", () =>{
        cy.request({
            method:'POST',
            url:'http://localhost:3000/posts',
            body: {
                "id": 2,
                "title": "Executeautomation",
                "author": "John"
            }
        }).then((res) =>{
            expect(res.body).has.property("title", "Executeautomation");
        })
    })

    it.only('API testing', () => {

        cy.request({
            method:'POST',
            url:'http://eaapp.somee.com/Account/Login',
            body: {
                "__RequestVerificationToken":"RDQzEeYL-usjERNWZM1arfd-Ll82KvWy35e-c6UfJvtMq1lhKPmSRJ0D8rU_J608OvuiIL5FzZkFDAFVSyLV__ikg8wIQ43gGk0UmHtKF0g1",
                "UserName": "admin",
                "Password": "password",
                "RememberMe": "false"
                },
                failOnStatusCode: false
        }).then(($res) => {
            expect($res.status).to.eql(500);
            expect($res.body).to.contain('<i>The required anti-forgery cookie &quot;__RequestVerificationToken&quot; is not present.</i>')
        })
    });

})