describe("End-to-end test", () => {
  describe("Signup", () => {
    it("signs up a new user", () => {
      cy.visit("/signup"); // replace with the actual path
      cy.get('input[name="email"]').type("user@example.com"); // replace with a valid email
      cy.get('input[name="password"]').type("Password123*"); // replace with a valid password
      cy.get("form").submit();
    });
  });
  describe("Login", () => {
    it("logs in an existing user but wrong password", () => {
      cy.visit("/login"); // replace with the actual path
      cy.get('input[name="email"]').type("user@example.com"); // replace with a valid email
      cy.get('input[name="password"]').type("Password123"); // replace with a valid password
      cy.get("form").submit();

      // Check if the login was successful
      // the error message should not be displayed
      cy.get('[data-testid="logged-in-message"]').should("not.exist");
    });
    it("logs in an existing user", () => {
      cy.visit("/login"); // replace with the actual path
      cy.get('input[name="email"]').type("user@example.com"); // replace with a valid email
      cy.get('input[name="password"]').type("Password123*"); // replace with a valid password
      cy.get("form").submit();

      // Check if the login was successful
      cy.get('[data-testid="logged-in-message"]').should(
        "contain",
        "Logged in as user@example.com"
      );
    });
  });
});
