describe("Success Add Products", ()=>{
    it('user success add product', ()=>{     
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')

    //Input username and password
    cy.get('#email').type("fares.tris@gmail.com")
    cy.get('#password').type("tokopedia123")

    //Click login
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()    
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click() 
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()     
    cy.get('#nama').type("testt UI Automate")
    cy.wait(2000);
    cy.get('#deskripsi').type("testt UI Automate")
    cy.wait(2000);
    cy.get('[id="harga beli"]').type("5000")
    cy.wait(2000);
    cy.get('[id="harga jual"]').type("7000")
    cy.wait(2000);
    cy.get('#stok').clear().type("5")
    cy.wait(2000);
    cy.get('#kategori').click()
    cy.wait(2000);
    cy.get('[class="css-u3dlpe"]').click()   
    cy.wait(2000);   
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
    cy.wait(2000); 
      

    //Assert dashboard page after login
    cy.url().should('include','/products')
    cy.contains("success")
    cy.contains("item ditambahkan")
    cy.wait(5000); 
  })
})

