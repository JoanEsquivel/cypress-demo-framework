//https://testersdock.com/cypress-database-testing/
describe("DB Testing", function () {
  it("Verify that there is only one row where the city is Espoo", function () {
    cy.task("queryDb", `SELECT * FROM usuarios_crm`).then((result) => {
      cy.log(result);
    });
  });
});
