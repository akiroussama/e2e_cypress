import React from 'react';
import EditWilder from './EditWilder';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from '../gql/client';
describe('<EditWilder />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react

    cy.mount(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <EditWilder />
        </BrowserRouter>
      </ApolloProvider>
    );
  });
});
