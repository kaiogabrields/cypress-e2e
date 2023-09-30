describe('Login', () => {
    it('CT_02 - Login sucess', () => {
        cy.guiLogin()
        cy.contains('a', 'Create a new note').should('be.visible')
    })
})