/// <reference types = "Cypress"/>
describe('Preubas avanzadas', function(){
    before(function(){
        cy.fixture('carritoDeCompras').then(function(datos){
            this.datos = datos
            //cy.fixture(this.datos.imagen).as('imagen')
        })
    })
    beforeEach(()=>{
        cy.visit("https://demo.opencart.com/index.php")
    })
    it('Realizar la compra de celulares basada en su titulo', function(){
        //cy.get('body')
        cy.get("#menu ul a:contains('Phones & PDAs')").click()
        // cy.get('div[class="product-thumb"]:has(.description):contains(HTC Touch HD)')
        cy.get("div[class='product-thumb']").as('contenedor')
        cy.get('@contenedor')
        .each(($el, index, $list) => {
            cy.get(':has(.description)').eq(index).find('.price').then(function($el1){
                let producto = $el1.text()
                cy.log(producto)

                if(producto.includes(this.datos.telefono1)){
                    cy.log('Se ha encontrado el elemento y precio buscado')
                    cy.get('@contenedor').eq(index).find("button[aria-label='cart_add']").click()
                }
                if(producto.includes(this.datos.telefono2)){
                    cy.log('Se ha encontrado el elemento y precio buscado')
                    cy.get('@contenedor').eq(index).find("button[onclick*='cart_add']").click()
                }
                if(producto.includes(this.datos.telefono3)){
                    cy.log('Se ha encontrado el elemento y precio buscado')
                    cy.get('@contenedor').eq(index).find("button[onclick*='cart_add']").click()
                }
            })
            
        })
    })
})