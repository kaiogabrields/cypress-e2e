import {faker} from '@faker-js/faker/locale/en'

describe('Singup', () => {
    const emailAddress  = `${faker.datatype.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`
    const password = Cypress.env('USER_PASSWORD')

    it('CT_01 - Singup sucess', () => {
      cy.fillSignupFormAndSubmit(emailAddress, password)
      cy.wait('@getNotes')
      cy.contains('h1', 'Your Notes').should('be.visible')
    })

})