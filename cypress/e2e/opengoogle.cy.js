describe('open google page', () => {
  it('passes', () => {
    cy.visit('https://google.com/')
    cy.contains('Accept all')
  })
})

describe('irish google 123 Insurance check', () => {
  it('passes', () => {
    cy.visit('https://www.google.ie/search?q=123')
    cy.contains('123 Insurance')
  })
})

// This test will fail if not incognito mode
describe('polish google without 123 Insurance (fail)', () => {
  it('passes', () => {
    cy.visit('https://www.google.pl/search?q=123')
    cy.contains.not('Porównywarki')
    cy.should('not.contain', '123 Insurance')
  })
})