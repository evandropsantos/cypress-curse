/// <reference types="cypress" />

const URL = 'https://wcaquino.me/cypress/componentes.html'

describe('Cypress basics', () => {
  it.only('Should visit a page and assert title', () => {
    cy.visit(URL)
    
    // cy.pause()

    cy.title()
      // .debug()
      .should('be.equal', 'Campo de Treinamento')
      .and('to.contain', 'Campo')
  })

  it('Should find and interact with and element', () => {
    cy.visit(URL)
    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!')
  })
})
