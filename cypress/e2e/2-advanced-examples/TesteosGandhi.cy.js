//Suite de casos de uso
describe('conjunto de pruebas para la pagina de gandhi', function(){
    it('Ingresar a la pagina principal de ddtech', function(){
        cy.visit("https://www.gandhi.com.mx/libros/novedades")

        // se marca el bloque de recomendaciones como un parametro
        cy.get('#maincontent').as('Recomendados')
        // cy.get(':nth-child(1) > .product-item-info > .details')
        cy.get('@Recomendados')
        .find('.product-item-info')
        .each(($el, index, $list) => {
            cy.get('@Recomendados').eq(index).find('.price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
            })
        })
    })
})