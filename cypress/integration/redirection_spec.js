/**
 2  * Check redirect to Adobe login page from https://account-dev.privo.com/oauth/ngs/login, which simulates Adobe login form.
 3  */

/*
4 describe('Continue with Privo from Adobe login NGS', function() {
    5
    6 test('Check redirect to Adobe login page from https://account.privo.com/oauth/ngs/login', function(browser) {
        7 browser
        8. url('https://account.privo.com/oauth/ngs/login')
        9. pause(10000) // a lot of redirects: privo -> adobe -> privo-saml-idp -> privo login
        10. waitForElementPresent('#loginForm button[type=submit]')
        11. assert.titleContains('Login')
        12. assert.urlContains('/ag/login/home.html')
        13. end();
        14
    });
    15
    16
});

*/

const {
    Urls
} = require('./url_constants_js');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe('Base URL', () => {
    it(`Check base URL`, () => {
        cy.visit("");
    });
});

describe('Continue with Privo from Adobe login NGS', () => {
    it(`Check redirect to Adobe login page from ${Urls.LOGIN_PAGE}`, () => {
        cy.visit(Urls.LOGIN_PAGE);
        cy.url().should('include', '/ag/login/home.html');
        cy.title().should('include', 'Login');
    });
});