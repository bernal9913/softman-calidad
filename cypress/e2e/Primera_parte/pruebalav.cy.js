/// <reference types="Cypress"</>
describe('Pruebas del suave', function(){
  beforeEach(()=>{
    cy.visit("https://www.holotaco.com/collections/holographic")
  })
  it('Agregar el elemento dal carrito de compra', function() {
        cy.get('.product__list').as('ProductosPopulares')
        cy.get('@ProductosPopulares')
            .find('.product-card__title')
            .each(($el, index, $list) => {
                if ($el.attr('href') === '/products/lavender-syrup') {
                    cy.get('@ProductosPopulares').contains('Add to bag').click()
                }
            })
        cy.get('#CartPopupHeading')
        .should('contain.text', 'Added to Bag')
        .should('be.visible')
    })
    it('calamos el drop down', function(){
      cy.get('#SiteNav > li:nth-child(2) > a > span').click()
      cy.get('[class="label"]').should('contain', 'Toppers', 'be.visible')
      cy.get('[class="label"]').should('contain', 'Cremes', 'be.visible')
      cy.get('[class="label"]').should('contain', 'Holographic', 'be.visible')
      cy.get('[class="label"]').should('contain', 'Multichrome', 'be.visible')
      cy.get('[class="label"]').should('contain', 'Metallic', 'be.visible')
      cy.get('[class="label"]').should('contain', 'Top & Base Coats', 'be.visible')
      cy.get('[class="label"]').should('contain', 'Shop All', 'be.visible')
    })
})