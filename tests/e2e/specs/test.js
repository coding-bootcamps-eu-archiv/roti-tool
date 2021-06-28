// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080/#/team");
    cy.contains("h1", "ROTI TOOL");
  });
  it("Visits the app team page", () => {
    cy.visit("http://localhost:8080/#/team");
    cy.contains("h1", "ROTI TOOL");
  });
  it("Visits the app team page and check for <p>", () => {
    cy.visit("http://localhost:8080/#/team");
    cy.contains("p");
  });
  it("Visits the app team page and check for h2", () => {
    cy.visit("http://localhost:8080/#/team");
    cy.contains("h2", "Wer hat's gebaut und warum?");
  });
});
