describe("SkillsAdmin", () => {
  beforeEach(() => {
    cy.visit("/skills"); // replace with the actual path
  });
  it("displays the list of skills", () => {
    // replace with the actual path
    cy.get("li").should("have.length", 4); // replace 5 with the expected number of skills
  });

  it("adds a new skill", () => {
    cy.get('[data-testid="new-skills-name"]').type("New Skill");
    cy.get('[data-testid="new-skills-button"]').click();
    // Add assertions to check if the new skill was added correctly
  });

  it("deletes a skill", () => {
    cy.get('[data-testid="delete-skill"]').click();
    // Add assertions to check if the skill was deleted correctly
  });
});
