/// <reference types="Cypress" />;

// describe("example to-do app", () => {
//   beforeEach("Open application", () => {
//     cy.visit("baseUrl");
//   });

//   it("displays two todo items by default", () => {
//     cy.get(".todo-list li").should("have.length", 2);
//   });
// });

// it("By ID", () => {
//   cy.visit("https://facebook.com/");
//   cy.get("#email");
// });

// it("By Class", () => {
//   cy.visit(
//     "https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Chains-of-Commands"
//   );
//   cy.get(".searchBox_H2mL");
// });

// it("By Tag", () => {
//   cy.visit(
//     "https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Chains-of-Commands"
//   );
//   cy.get("nav");
// });

// it("By Tag value", () => {
//   cy.visit("https://facebook.com/");
//   cy.get('[name="pass"]');
// });

// it("By Diffent Tag", () => {
//   cy.visit("https://facebook.com/");
//   cy.get('[data-testid="open-registration-form-button"][role="button"]');
// });

// it("By Diffent Types", () => {
//   cy.visit(
//     "https://docs.cypress.io/guides/continuous-integration/introduction"
//   );
//   cy.get('button[type="button"][aria-label="Close"]');
// });

// it.only("By Contains name", () => {
//   cy.visit("https://next.privat24.ua/");
//   cy.get('*[class^="card"]');
// });

it("Using get with find an Eq", () => {
  cy.visit("https://next.privat24.ua/deposit/open");
  cy.get('tbody').find('td').find('div').find('button').eq([0]);
});

it.only("Using get with find an Eq", () => {
  cy.visit("https://docs.cypress.io/api/commands/eq#Syntax");
  cy.get('main').find
});
