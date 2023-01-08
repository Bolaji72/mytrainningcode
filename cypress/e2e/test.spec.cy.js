
describe('Test', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => {
      return false
    })
    cy.visit('/')
  })



  it('should visit amazon', () => {
    cy.fixture('elements').then((loc) => {
      cy.get(loc.textBox).type(loc.iphone)
      cy.get(loc.searchButton).click()

    })

  })

  it.only('should visit amazon again', () => {
    cy.fixture('elements').then((loc) => {
      cy.get(loc.textBox).type(loc.ferrari)
      cy.get(loc.searchButton).click()

    })
  })

  it.only('should visit amazon the third time', () => {
    cy.fixture('elements').then((loc) => {
      cy.get(loc.textBox).type('Google Pixel 6')
      cy.get(loc.searchButton).click()
    })
  })

  it.only('should visit amazon the fourth time', () => {
    cy.fixture('elements').then((loc) => {
      cy.get(loc.textBox).type('Hp Laptop')
      cy.get(loc.searchButton).click()
    })

  })

})