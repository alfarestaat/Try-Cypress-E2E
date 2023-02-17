describe("LOGIN KasirAJA", ()=>{
    it('user can login', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')

        //Input username and password
        cy.get('#email').type("fares.tris@gmail.com")
        cy.get('#password').type("tokopedia123")

        //Click login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
    })
})