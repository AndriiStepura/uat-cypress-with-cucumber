describe('open google page', () => {
  it('passes', () => {
    cy.visit('https://google.com/')
    cy.contains('Accept all')
  })
})

describe('irish google interface test', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/search?q=123&hl=ga')
    cy.contains('Glac le gach rud')
    cy.should('not.contain', 'Accept all')
  })
})

describe('polish google interface test', () => {
  it('passes', () => {
    cy.visit('https://www.google.pl/search?q=123&hl=pl&lr=lang_pl')
    cy.contains('Zaakceptuj wszystko')    
    cy.should('not.contain', 'Accept all')
    cy.should('not.contain', 'Glac le gach rud')
  })
})