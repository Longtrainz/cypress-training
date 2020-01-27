import {loginPage} from '../examples/pages/ealoginpage';


describe("Login test", () => {
    before("Call a particular it block", () => {
        cy.visit(`http://eaapp.somee.com/`);
        cy.contains("Login").click();
    });

    it("Testing log in", () => {
    
        loginPage.performLogin("admin", "password");

        loginPage.clickLoginButton();
    });
});
