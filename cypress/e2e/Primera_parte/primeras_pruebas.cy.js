///<reference types="Cypress"</>

//suite de casos
describe('Primer conjunto de casos de prueba', function(){
    beforeEach(()=>{
        cy.visit("http://automationpractice.com/index.php")
    })
    /*
    //caso de prueba 1
    it('ingresar a la pagina principal de atenea', function(){
        cy.get('#homefeatured .product-container').should('have.length',7)
        })
    */
    //caso de prueba 2
    /*it('Agregar el elemento tipo blouse al carrito de compras desde la página principal', function(){
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
        cy.get('@ProductosPopulares')
        .find('.product-name')
        .each(($el, index, $list) => {
            cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)

                if($el.attr('title') === 'Printed Dress' && precio.includes('26.00')){
                    cy.log('Se ha encontrado el elemento y precio buscado')
                    cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                }
            })
            
        })
        cy.get('h2 > .ajax_cart_product_txt')
        .should('contain.text', 'There is 1 item in your cart.')
        .should('be.visible')
        })
    //caso de prueba 3
    it('Verificamos que el drop down de women tenga los elementos necesarios', function(){
        // Flotamos sobre un elemento
    })*//*
    it('caso de prueba 4', function(){
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
        // cy.get('#ul_layered_category_0 > :nth-child(1)')
        // cy.get('#ul_layered_category_0 > :nth-child(1)')
        /*cy.get('li[class="item"]:has(a[href*="https://www.gandhi.com.mx/libros/novedades?autor=Alberto+Villarreal"]) input')
        cy.get('li:has(input[data-slug*="con-pantalla-tactil"]) input')
        cy.get('fieldset[class="womf__toggle-container__fieldset"]:has(input[id="whats-on-number-radio"]) input')
        cy.get('div[class="compareProduct"]:has(input[name*="bGFfYXUxM19pNzE2MjUxMjMwNzBid25oY2NfNTIy"])')
        cy.get('div{class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"}:has(input) input')
        
        cy.get('ul[class="list]').find('input[data-slug="con-existencia"]').check({force:true})
        <ul class="list">
<li>
<label>
<input type="checkbox" id="stock" class="stock" data-option="stock" data-slug="con-existencia"> Solo productos con existencia
</label>
</li>
</ul>


        /*<div class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left">
            <label>
                <input type="checkbox" name="" value="">
                    <i class="a-icon a-icon-checkbox"></i><span class="a-label a-checkbox-label"></span></label></div>
        /*
        <div data-cp-pf-element="cklist" class="cp-pf-cklist">
<input id="cp-pf-cklist-toggle-statuses" data-cp-pf-toggler="" type="checkbox">    <ul>
<li>
<label class=" ">
<input type="checkbox" name="cpsp[instock]" value="1" data-cp-pf-check-box="Estatus" data-cp-seo-val="En-existencia">
<span>En existencia (12)</span>
</label>
</li>
<li>
<label class=" ">
<input type="checkbox" name="cpsp[isoffer]" value="1" data-cp-pf-check-box="Estatus" data-cp-seo-val="Oferta">
<span>Oferta (13)</span>
</label>
</li>
<li>
<label class=" disabled">
<input type="checkbox" name="cpsp[envio]" value="1" data-cp-pf-check-box="Estatus" data-cp-seo-val="Envio-gratis" class="disabled">
<span>Envío gratis (0)</span>
</label>
</li>
<li>
<label class=" disabled">
<input type="checkbox" name="cpsp[isnew]" value="1" data-cp-pf-check-box="Estatus" data-cp-seo-val="Nuevo" class="disabled">
<span>Producto Nuevo (0)</span>
</label>
</li>
</ul>
</div>
        /*<input type="CHECKBOX" class="ocComp" name="bGFfZzU1MTFfbmk3dGdsODUxMjMwNTBidzExc18xNzAwX3A" value="configuration-compare.aspx">
        <div class="compareProduct">
            <input type="CHECKBOX" class="ocComp" name="bGFfYXUxM19pNzE2MjUxMjMwNzBid25oY2NfNTIy" value="configuration-compare.aspx">
                <span class="ckbx">&nbsp;</span>
                <span class="textCompare">Añadir para comparar</span>
                <span class="textCompareSelected hidden"><span class="t"><span></span></span>
                <span class="b"><span></span></span><span class="c">
                    <strong>Comparar</strong></span></span>
                    </div>
        /*<fieldset class="womf__toggle-container__fieldset">
            <legend class="visually-hidden">Ruta o número de vuelo</legend> 
            <div class="radio-button ">
                <input type="radio" class="radio-button__input js-activate-flight-route" name="womf-flight-status-radio" id="whats-on-route-radio" aria-checked="true" checked="checked"><label for="whats-on-route-radio" class="radio-button__text">Ruta</label>  </div> 
                <div class="radio-button ">
                    <input type="radio" class="radio-button__input js-activate-flight-number" name="womf-flight-status-radio" id="whats-on-number-radio" aria-checked="false"><label for="whats-on-number-radio" class="radio-button__text">Número de vuelo</label>  </div> 
                    </fieldset>

        /*autoFilter_option1
        cy.get('li:has(label[])')
        <input class="radio" type="checkbox" id="10" name="categoria" value="Tecnología y Electrónica">

        <li><label name="10" for="10">  Tecnología y Electrónica </label><input class="radio" type="checkbox" id="10" name="categoria" value="Tecnología y Electrónica"></li>
        /*<li class="item">
        <a data-bind="attr: {href:url}, visible: count >= 1" href="https://www.gandhi.com.mx/libros/novedades?autor=Alberto+Villarreal">
            <input type="checkbox" data-bind="checked: is_selected, attr: {id: id}" onclick="this.parentNode.click();" id="autorFilter_option_1">
            <label data-bind="attr: {for: id}" for="autorFilter_option_1">
                <span data-bind="html: label">Alberto Villarreal</span>
                <span class="count" data-bind="text: count, visible: $parent.displayProductCount">1</span>
            </label>
        </a>
        
        <div data-bind="visible: count < 1" style="display: none;">
            <span data-bind="html: label">Alberto Villarreal</span>
            <span class="count" data-bind="text: count">1</span>
        </div>
    </li>
        /*<li>
            <label>
                <input type="checkbox" class="option" data-option="pantalla-tactil" data-slug="con-pantalla-touch"> Con pantalla touch </label>
        </li>
        // #layered_category_9
        /*<li>
        
<label>
<input type="checkbox" class="option" data-option="pantalla-tactil" data-slug="con-pantalla-touch"> Con pantalla touch </label>
</li>*/
    
    it('verificar que los dropmenus de arreglo esten funcionando', function(){
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('#selectProductSort').select('In stock').should('have.value','quantity:desc')
        // 

    })
})