const { Urls } = require('./url_constants');

describe('Continue with Privo from Adobe login NGS', () => {
    it(`Check redirect to Adobe login page from ${Urls.LoginPage}`, () => {
        cy.visit(Urls.LoginPage);
        // expect(true).to.equal(true);
    });
});