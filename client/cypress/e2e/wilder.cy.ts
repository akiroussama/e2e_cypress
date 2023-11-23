describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('[data-testid="newWilderName"]').type('Cypress');
    cy.get('[data-testid="newWilderCity"]').should('exist');
  });
});
