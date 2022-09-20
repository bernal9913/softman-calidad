///<reference types="Cypress"</>

//suite de casos
describe('Primer conjunto de casos de prueba', function(){
    it('Prueba de todos los scripts juntos',function(){
        cy.visit('http://automationpractice.com/index.php')
        /*cy.get('.login').click()
        cy.get('#email').type('seapagasolalalapqpp@gmail.com')
        cy.get('#passwd').type('asd123')
        */
        cy.get('#search_query_top').type('blouse')
        cy.get('#searchbox > .btn').click()
        //cy.wait(3000)
        if(cy.get('.right-block > h5 > .product-name').contains('Blouse')){
            cy.get('.ajax_add_to_cart_button > span').click()
            //cy.wait(5000)
            
            cy.wait(500)
            cy.get('.button-container > .button-medium > span').click()
            cy.get('.cart_navigation > .button > span').click()
            cy.get('#email').type('seapagasolalalapqpp@gmail.com')
            cy.get('#passwd').type('asd123')
            cy.get('#SubmitLogin > span').click()
            //cy.get('#ordermsg > .form-control').type('Malaya un 10')
            cy.get('.cart_navigation > .button > span').click()
            cy.wait(1000)
            cy.get('div[id="uniform-cgv"] input').check()
            //cy.get('.checkbox').check()
            cy.get('.cart_navigation > .button > span').click()
            cy.get('.bankwire').click()
            cy.get('#cart_navigation > .button > span').click()
            cy.get('.cheque-indent > .dark').should('contain.text','Your order on My Store is complete.')
        }
    })
})