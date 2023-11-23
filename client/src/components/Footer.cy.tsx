import React from 'react';
import Footer from './Footer';

describe('<Footer />', () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.get('[data-cy="footerId"]').should('contain', 'Wild Code School');
  });
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.get('[data-cy="footerId"]').should('contain', '2022');
  });
});
