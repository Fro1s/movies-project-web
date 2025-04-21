describe("Paginação de filmes", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Deve navegar para a próxima página e verificar novos dados", () => {
        cy.intercept("GET", "/api/movies?page=2").as("getMoviesPage2");
        cy.intercept("GET", "/api/movies?page=1").as("getMoviesPage1");

        cy.get('[data-testid="movie-card"]').first().invoke("text").as("firstPageMovie");

        cy.get('[data-testid="pagination-next"]').click();
        cy.wait("@getMoviesPage2");

        cy.get('[data-testid="movie-card"]').first().invoke("text").should("not.eq", Cypress.env("firstPageMovie"));

        cy.get('[data-testid="pagination-prev"]').click();
        cy.wait("@getMoviesPage1");

        cy.get('[data-testid="movie-card"]').first().invoke("text").should("eq", Cypress.env("firstPageMovie"));
    });
});