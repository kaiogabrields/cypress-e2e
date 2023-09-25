describe('Login', () => {
    it('CT_02 - Login sucess', () => {
        cy.fillEmailPasswordAndLogin()
        cy.contains('a', 'Create a new note').should('be.visible')
    })
})