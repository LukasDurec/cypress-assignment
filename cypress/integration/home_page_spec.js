describe('Home Page', () => {
    it('loading webpage', () => {
      cy.visit('/')
      cy.url().should('include', '/dashboard')
      cy.get('h1').contains("Tour of Heroes")
    })
  })
  