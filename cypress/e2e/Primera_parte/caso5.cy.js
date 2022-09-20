describe('Pruebas del caso 5', function(){
    it('Caso de prueba 5, checbox', function(){
        cy.visit('https://www.gandhi.com.mx/libros/novedades')
        cy.get('#narrow-by-list > :nth-child(1)').click()
        
        cy.get('li[class="item"]:has(a[href*="https://www.gandhi.com.mx/libros/novedades?autor=Alberto+Villarreal"]) input').check({force:true})
        
    })
    /*
<div class="checker" id="uniform-cgv"><span><input type="checkbox" name="cgv" id="cgv" value="1"></span></div>
    cy.get('div[id="uniform-cgv"] input').check()
    /*
    it('Prueba en ddtech', function(){

        cy.visit('https://ddtech.mx/productos/componentes/tarjetas-de-video')
        cy.get('li:has(input[data-option*="chip-grafico"]) input').as('checkear')
        cy.get('@checkear').check({force:true})
    })
    it('Aerolinea averqp', function(){
        cy.visit('https://www.emirates.com/mx/spanish/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#tab2 > .widget__tab__link').click()
    })
    it('dell', function(){
        cy.visit('https://www.dell.com/mx/p/deals/gaming-system-deals')
        //cy.get('.cc-dismiss').click()
        cy.get('div[class="compareProduct"]:has(input[name="bGFfZzU1MTFfbmk3dGdsODUxMjMwNTBidzExc18xNzAwX3A"]) input').check({force:true})
        
    })
    it('cyberpuerca', function(){
        cy.visit('https://www.cyberpuerta.mx/Laptop-Gamer-Dell/')
        cy.get(':nth-child(1) > .cp-pf-cklist > ul > :nth-child(2) > label > span').check()
    })
    it('edestinos', function(){
        cy.visit('https://www.shoecarnival.com/mens/athletics_and_sneakers/running_shoes')



    })*/
})