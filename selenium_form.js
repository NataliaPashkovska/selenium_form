// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in

it('Login with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();

    cy.get('[class="flash success"]').contains('You logged into a secure area!').should('exist');

});

// 2. Login with invalid creds and check validation error

it('Login with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[name="username"]').type('tomsmith1');
    cy.get('[name="password"]').type('SuperSecretPassword!1');
    cy.get('[type="submit"]').click();

    cy.get('[class="flash error"]').contains('Your username is invalid!').should('exist');

});
// 3. Logout from app and assert you successfully logged out

it('Logout from app', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.get('[class="button secondary radius"]').click();

    cy.get('[class="flash success"]').contains('You logged out of the secure area!').should('exist');

});
