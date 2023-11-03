import React from "react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../gql/client";

describe("<Login />", () => {
  it("renders", () => {
    cy.mount(
      <ApolloProvider client={client}>
        <Router>
          <Login />
        </Router>
      </ApolloProvider>
    );
  });
});
