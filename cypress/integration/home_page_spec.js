describe('Home Page', () => {
  beforeEach(() => {
    cy.visit("/")
})
    it('loading webpage', () => {
      cy.visit('/')
      cy.url().should('include', '/dashboard')
      cy.get('h1').contains("Tour of Heroes")
    })

    it('navigation Dashboard', () => {
      cy.get("a").contains("Dashboard").click()
      cy.url().should('include', '/dashboard')
      cy.get('h1').contains("Tour of Heroes")
    })
    it('navigation Heroes', () => {
      cy.get("a").contains("Heroes").click()
      cy.url().should('include', '/heroes')
      cy.get('h2').contains("My Heroes")
    })

    it('select hero', () => {
      cy.get('[ng-reflect-router-link="/detail/13"]').click()
      cy.contains("BOMBASTO Details").should("be.visible") 
    })

    it('search hero', () => {
      cy.get("input#search-box").type("Bombasto")
      cy.get('li > a').contains("Bombasto").should("be.visible")
      cy.get('li > a').contains("Bombasto").click()
      cy.contains("BOMBASTO Details").should("be.visible") 
    })

  })
  