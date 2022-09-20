/// <reference types = "Cypress"/>
// Examen 1 Gestion de calidad 2 
// Miriana Fernamda Navarrete Teran
// Jesus Carlos Ramirez Bernal
//
describe('examen belico', function(){
    beforeEach(()=>{
        cy.visit("https://www.telcel.com")
    })



    it('Examen belico culishi', function(){

    //cy.visit('https://www.telcel.com')
    
    cy.get('#telcel-menu-principal-boton').click()
    cy.get('.tienda > .dropdown-toggle > .text-option').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a > img').click()
    
    
    cy.get('.chosen-single > span').type('Sonora')
    cy.get('.active-result').click()
    cy.get('#entrarPerfilador').click()
    
    
    cy.get("#seleccion-de-equipos-sidebar-mosaicfilters > div:nth-child(23) > a").click()
    cy.get('#filtro-acordeon-Marca > fieldset > ul').as('lista')
    cy.get('#Apple').click()

    cy.get(':nth-child(2) > .telcel-mosaico-equipos-comparador-contenedor > .telcel-mosaico-equipos-loquiero-liga').click()
    //cy.get('<a ng-value="device.urlCarrito" ng-click="compra($event)" class="telcel-mosaico-equipos-loquiero-liga" data-titulo="Equipos|Telefonos y Smartphones|1|1|Apple|iPhone 13|iPhone 13|4696|Azul|128GB|70018366" data-evento="clicEquipo" data-etiqueta="Lo quiero" value="https://tienda.telcel.com/content/telcel/prepagocart.html?deviceId=70018366&amp;regionId=2&amp;planId=1&amp;action=Pre&amp;usertype=Guest">Lo quiero</a>').click()
    
    //#telcel-menu-principal-boton

    //cy.visit('https://www.telcel.com/personas/equipos/telefonos-y-smartphones/apple/iphone-13.html?version=azul-128GB')
    //cy.get('.chosen-single > span').type('Sonora')
    //cy.get('.active-result').click()
    //cy.get('#entrarPerfilador').click()
    cy.get('#acepto-cookies').click()
    cy.get('#ecommerce-ficha-tecnica-agregar-carrito-boton').click()
    cy.get('#ecommerce-carrito-de-compras-iniciar-violeta').click()

    cy.get('.telcel-campo-de-texto-cta--borde').click()
    cy.get('#tienda-formulario-titular-nombre').type('Pulgoso')
    //cy.get('#tienda-formulario-titular-nombre').type()
    cy.get('#tienda-formulario-titular-apellido-paterno').type('Yakitori')
    cy.get('#tienda-formulario-titular-apellido-materno').type('Yakimeshi')
    cy.get('#fecha-nacimiento-titular').type('04102000')
    cy.get('#tienda-formulario-titular-correo').type('avalenzuela@unison.mx')
    cy.get('#tienda-formulario-titular-correo-continuar').click()


    cy.get('#tienda-formulario-titular--continuar-sin-registro').click()
    cy.get('#calle-entrega-nueva-direccion').type('Calle de las sirenas')
    cy.get('#numero-ext-entrega-nueva-direccion').type('1')
    cy.get('#cp-entrega-nueva-direccion') .type('83100')
    cy.get('#colonia-entrega-nueva-direccion').type('centro')
    cy.get('#datos-de-entrega--direccion-nueva-telefono').type('6621112222')
    cy.get('#tienda-formulario-titular-continuar-domicilio-facturar')

    })


    // es para evitar errores yn os deje hacer pruebas
Cypress.on('uncaught:exception', (err,runable) => {
    console.log("err: " + err)
    console.log("runnable :" + runable)
    return false
})
})