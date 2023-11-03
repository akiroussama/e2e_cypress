describe("SkillsAdmin", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds a new skill", () => {
    cy.get('[data-testid="newWilderName"]')
      .should("be.visible")
      .type("James Bond");
      cy.get("button").should("be.visible").click();
    // Add assertions to check if the new skill was added correctly
  });

  it("deletes a skill", () => {
    cy.get('[data-cy="delete-skill"]').should("be.visible").click();
    // Add assertions to check if the skill was deleted correctly
  });
});
