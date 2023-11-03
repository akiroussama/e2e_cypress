import React from "react";
import SkillsAdmin from "./SkillsAdmin";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../gql/client";

describe("<SkillsAdmin />", () => {
  beforeEach(() => {
    cy.mount(
      <ApolloProvider client={client}>
        <Router>
          <SkillsAdmin />
        </Router>
      </ApolloProvider>
    );
  });

  it("renders", () => {
    cy.get('[data-testid="skills-list"]').should("exist");
  });

  it("adds a new skill", () => {
    cy.get('input[name="new-skill"]').type("New Skill");
    cy.get('button[name="add-skill"]').click();
    // Add assertions to check if the new skill was added correctly
  });

  it("deletes a skill", () => {
    cy.get('button[name="delete-skill"]').first().click();
    // Add assertions to check if the skill was deleted correctly
  });

  // Add more tests as needed
});
