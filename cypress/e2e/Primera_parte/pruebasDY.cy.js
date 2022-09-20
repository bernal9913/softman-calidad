//Suite de casos de uso
describe('Primer conjunto de casos de prueba', function(){
    beforeEach(()=>{
        // Visitar la pagina
        cy.visit("http://automationpractice.com/index.php")
    })
    it('Ingresar a la pagina principal de atenea', function(){
        // ingresamos a la pagina
        

        // Verificar la cantidad de elementos visibles
        // agregamos el should para poder manejar los assertion error
        //cy.get('#homefeatured .product-container').should('have.length',7)

        // obtenemos el elemento homefeatured .product-container como parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares')

        // verificamos nuevamente la cantidad de elementos usados en el parametro
        //cy.get('@ProductosPopulares').should('have.length', 7)

        cy.get('@ProductosPopulares')
        .find('.product-name')
        .each(($el, index, $list) => {
            cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)

            if($el.attr('title') === 'Printed Dress' && precio.includes('50.99')){
                cy.log('Se ha encontrado el elemento buscado')
                cy.log('Se ha encontrado el precio buscado')
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
            }
            })
        })
        cy.get('h2 > .ajax_cart_product_txt')
        .should('contain.text', 'There is 1 item in your cart.')
        .should('be.visible')
    })
    it('Verificamos que funcione el drop menu', function(){
        // ahorita vemos qp
        cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr', 'style', 'display: block')
        cy.get('a[title="Tops"]').should('be.visible')
        cy.get('a[title="T-shirts"]').should('be.visible')
        cy.get('a[title="Blouses"]').should('be.visible')
        cy.get('a[title="Dresses"]').should('be.visible')
        cy.get('a[title="Casual"]').should('be.visible')
        cy.get('a[title="Training"]').should('be.visible')
        cy.get('a[title="Summer"]').should('be.visible')

        /*  
        dresses
        #block_top_menu > ul > li:nth-child(2) > a
        #block_top_menu > ul > li:nth-child(2)
        
        tshirts
        #block_top_menu > ul > li:nth-child(3) > a

         */
    })
})