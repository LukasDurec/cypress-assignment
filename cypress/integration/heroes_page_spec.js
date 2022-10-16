///<reference types="cypress" />

describe('Heroes Page', () => {
    it('loading webpage', () => {
      cy.visit('/heroes')
      cy.get('h1').contains("Tour of Heroes")
      cy.get('h2').contains("My Heroes")
      cy.contains("HeroService: fetched heroes").should("be.visible")
    })
    it('navigate to Dashboard',() =>{
        cy.get("a").contains("Dashboard").click()
        cy.url().should('include', '/dashboard')
        cy.visit("/heroes")
    })

    it('add new hero with empty text',() =>{
        cy.get("button.add-button").click()
        cy.get("span.badge").contains("21").should("not.exist")
        cy.get("input#new-hero").type("   ")
        cy.get("button.add-button").click()
        cy.get("span.badge").contains("21").should("not.exist")
    })

    it('add new hero',() =>{
        cy.get("input#new-hero").type("Test Hero")
        cy.get("button.add-button").click()
        cy.contains("Test Hero").should("be.visible")
        cy.contains("HeroService: added hero w/ id=21").should("be.visible")

    })

    it('delete hero',() =>{
        cy.contains("Test Hero").parent('li').find("button").click()
        cy.get("span.badge").contains("21").should("not.exist") 
        cy.contains("HeroService: deleted hero id=21").should("be.visible")
    })

    it('clear messages',() =>{
        cy.get("h2").contains("Messages").should("be.visible")
        cy.get("button.clear").contains("Clear messages").click()
        cy.get("h2").contains("Messages").should("not.exist")
    })

  })
  