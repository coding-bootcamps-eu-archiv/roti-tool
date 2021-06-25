describe("My Index Test", () => {
  it("Visits the Index Page and clicks on the button", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("Klick fürs ROTI").click();
    cy.url().should("include", "http://localhost:8080/#/new");
  });
  it("Should focus content link after tab", () => {
    cy.visit("http://localhost:8080/");
    cy.tab();
    cy.get(".rotiBtn").should("have.focus");
  });
  it("Visits the Index Page and checks for Anleitung", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("Anleitung");
  });
});
