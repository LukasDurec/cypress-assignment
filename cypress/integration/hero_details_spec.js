///<reference types="cypress" />

describe('Hero Details', () => {

    beforeEach(() => {
        cy.visit("/heroes")
        cy.contains("Dr. Nice").click()
    })

    it('select hero', () => {
        cy.contains("DR. NICE Details").should("be.visible") 
        cy.contains("HeroService: fetched hero id=12").should("be.visible")
    })

    it('go back button', () => {
        
        cy.get('app-hero-detail > :nth-child(1) > :nth-child(4)').click()
        cy.contains("DR. NICE Details").should("not.exist") 
        cy.get('h2').contains("My Heroes")
    })
    it('edit hero name to blank text', () => {
       cy.get("input#hero-name").clear()
       cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)').click()
       cy.contains("Dr. Nice").should("not.exist")
       cy.contains("HeroService: updated hero id=12").should("be.visible")
    })
    it('edit hero name ', () => {
        cy.get("input#hero-name").clear()
        cy.get("input#hero-name").type("Dr. Nice EDITED")
        cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)').click()
        cy.contains("Dr. Nice EDITED").should("be.visible")
     })
     it('clear messages',() =>{
        cy.get("h2").contains("Messages").should("be.visible")
        cy.get("button.clear").contains("Clear messages").click()
        cy.get("h2").contains("Messages").should("not.exist")
    })
    
  })