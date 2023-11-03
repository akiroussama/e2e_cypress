import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EditWilder from "./EditWilder";
import { ApolloProvider } from "@apollo/client";
import client from "../gql/client";
import "@testing-library/cypress/add-commands";

describe("<EditWilder />", () => {
  it("renders", () => {
    cy.mount(
      <ApolloProvider client={client}>
        <Router>
          <EditWilder />
        </Router>
      </ApolloProvider>
    );
  });
});
