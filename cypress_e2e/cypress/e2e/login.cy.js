describe('Login', () => {
    it('CT_02 - Login sucess', () => {
        cy.fillEmailPasswordAndLogin()
        cy.wait('@getNotes')
        cy.contains('h1', 'Your Notes').should('be.visible')
    })
})