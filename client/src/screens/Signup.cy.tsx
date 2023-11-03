import React from "react";
import Signup from "./Signup";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../gql/client";

describe("<Signup />", () => {
  beforeEach(() => {
    cy.mount(
      <ApolloProvider client={client}>
        <Router>
          <Signup />
        </Router>
      </ApolloProvider>
    );
  });
  it("submits the form successfully", () => {
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("Password123");
    cy.get("form").submit();

    // Replace the following with the actual behavior when the form is submitted successfully
    cy.url().should("include", "/login");
  });

  it("handles form submission failure", () => {
    cy.get('input[name="email"]').type("existing@example.com");
    cy.get('input[name="password"]').type("Password123");
    cy.get("form").submit();

    // Replace the following with the actual behavior when the form submission fails
    cy.get(".Toastify__toast--error").should("be.visible");
  });
});
