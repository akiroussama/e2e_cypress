describe("SkillsAdmin", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds a new wilder", () => {
    cy.get('[data-testid="newWilderName"]')
      .should("be.visible")
      .type("James Bond");
    cy.get("button").click();
    // Add assertions to check if the new skill was added correctly
  });

  it("modify a wilder", () => {
    cy.get('[name="submission"]').click();
    // Add assertions to check if the skill was deleted correctly
  });
});
