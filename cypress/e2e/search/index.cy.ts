describe("Pesquisar Filme", () => {
    it("Pesquisar Filme usando o Search", () => {

        cy.visit("/")

        cy.wait(2000)

        cy.get("input#search-input").type("The GodFather")

        cy.wait(10000)

    })
})