///<reference types="Cypress"</>

//suite de casos
describe('Primer conjunto de casos de prueba', function(){
    // it('Agregar el elemento dal carrito de compra', function() {
    //     cy.visit("https://www.holotaco.com/collections/holographic")
    //     cy.get('.product__list').as('ProductosPopulares')
    //     cy.get('@ProductosPopulares')
    //         .find('.product-card__title')
    //         .each(($el, index, $list) => {
    //             if ($el.attr('href') === '/products/zyler-the-cat') {
    //                 cy.get('@ProductosPopulares').contains('Add to bag').click()
    //             }
    //         })
    //     cy.get('#CartPopupHeading')
    //     .should('contain.text', 'Added to Bag')
    //     .should('be.visible')
    // }),
    it('Verificar elementos del dropdown', function() {
        cy.visit("https://www.holotaco.com/collections/holographic")
        cy.get('#SiteNav > li:nth-child(2) > a > span').click()
        cy.get('[class="label"]').should('contain', 'Toppers', 'be.visible')
        cy.get('[class="label"]').should('contain', 'Cremes', 'be.visible')
        cy.get('[class="label"]').should('contain', 'Holographic', 'be.visible')
        cy.get('[class="label"]').should('contain', 'Multichrome', 'be.visible')
        cy.get('[class="label"]').should('contain', 'Metallic', 'be.visible')
        cy.get('[class="label"]').should('contain', 'Top & Base Coats', 'be.visible')
        cy.get('[class="label"]').should('contain', 'Shop All', 'be.visible')
    })/*
    it('mariana', function(){
        //ingresar a la pagina principal y buscar el elemento blouse
        cy.visit("http://automationpractice.com/index.php")
        cy.get('#searchbox').type('Blouse')
        cy.get('#searchbox > .btn').click()
        

        //Validar y agregar al carrito
        cy.get('.right-block > h5 > .product-name')
            .should('contain.text', 'Blouse')
        cy.get('.lnk_view > span').click()
        cy.get('.exclusive > span').should('contain.text', 'Add to cart').click()
        cy.wait(6000)

        cy.get('.button-container > .button-medium').should('contain.text', 'Proceed to checkout').click()
        cy.get('.cart_description > .product-name > a')
            .should('contain.text', 'Blouse')
        cy.get('#product_price_2_7_0 > .price')
            .should('contain.text', '$27.00')

        cy.get('.cart_navigation > .button').should('contain.text', 'Proceed to checkout').click()


        //Validar credenciales y Sign in
        cy.get('#email').type('marscamargo123@gmail.com')
        cy.get('#passwd').type('lamejorclase') 
        cy.get('#SubmitLogin').click()


        //Terminar el check out
        cy.get('.cart_navigation > .button').should('contain.text', 'Proceed to checkout').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.fancybox-item').click()
        cy.wait(1000)
        cy.get('#cgv').check({force:true}).should('be.checked')
        cy.get('.cart_navigation > .button').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.cheque-indent > .dark').should('contain.text', 'Your order on My Store is complete.')
    })*/
})