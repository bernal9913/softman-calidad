/// <reference types= "Cypress"/>
describe('asdasdasd',function(){
    before(function(){
        cy.fixture('datiwis').then(function(data){
            this.data = data
        })
    })
    /*beforeEach(()=>{
        cy.visit('https://www.lttstore.com/')
    })*/
    it("insertacion de las dataciones", function(){
        cy.visit('https://www.lttstore.com/')
        cy.get('#block-1584120216480-0 > .ProductListWrapper > .ProductList > :nth-child(2) > .ProductItem > .ProductItem__Wrapper > .ProductItem__Info > .ProductItem__Title.Heading > .ow').click().should('be.visible')
        cy.get('#product-cart').click()
        cy.get('.Cart__Checkout').click()
        //cy.get('#checkout_email').type(this.data.email)
        cy.get('#checkout_shipping_address_country').select(this.data.country)
        //cy.get('#checkout_shipping_address_country').type(this.data.firstName)
        //cy.get('#checkout_shipping_address_country')
        cy.get('#checkout_shipping_address_first_name').type(this.data.firstName)
        //cy.get('#checkout_shipping_address_first_name').type(this.data.firstName)
        cy.get('#checkout_email').type(this.data.email)
        cy.get('#checkout_shipping_address_last_name').type(this.data.lastName)
        cy.get('#checkout_shipping_address_address1').type(this.data.address)
        cy.get('#checkout_shipping_address_zip').type(this.data.zip)
        cy.get('#checkout_shipping_address_city').type(this.data.city)
        cy.get('#checkout_shipping_address_province').select(this.data.state)
        //cy.get('#checkout_shipping_address_province').select(this.data.region)
        cy.get('#continue_button').click()
    }) 
    /*it('adidas',function(){
        cy.visit("https://www.adidas.mx/account-register")
    })*/
    /*it('spotify',function(){
        cy.visit("https://www.spotify.com/mx/signup")
    })*//*
    it("alibaba", function(){
        cy.visit('https://signin.rockstargames.com/create?cid=socialclub&lang=es-ES&returnUrl=%2Fmyprofile')
        cy.get('[data-ui-name="dateOfBirth_day"] > .UI__DropDown-socialclub__custom-select > .select').select(this.data.birthDate[0])
        cy.get('[data-ui-name="dateOfBirth_month"] > .UI__DropDown-socialclub__custom-select > .select').select(this.data.birthDate[1])
        cy.get('[data-ui-name="dateOfBirth_year"] > .UI__DropDown-socialclub__custom-select > .select').select(this.data.birthDate[2])
        cy.get('.CreateAccountMaster__actions__Xe6D1 > .UI__Button-socialclub__btn').click({force:true})
        cy.get('input[id^="policyAccept"]').check()
        //cy.get('.CreateAccountMaster__actions__Xe6D1 > .UI__Button-socialclub__btn').click()
        //cy.get('#language-switch').select("English")
    })*//*
    it('caffenio', function(){
        cy.visit('https://mi.caffenio.com/Customer/Register')
        
        cy.visit('https://mi.caffenio.com/Customer/Register')
        
        cy.get('#Name').type(this.data.firstName)
        cy.get('#FirstSurname').type(this.data.lastName)
        cy.get('#Day').select(this.data.birthDate[0])
        cy.get('#Month').select(this.data.birthDate[1])
        cy.get('#Year').select(this.data.birthDate[2])
        cy.get('#lblFemale').click()
        cy.get('#PhoneNumber').type(this.data.phone)
        cy.get('#Email').type(this.data.email)
        cy.get('#Password').type(this.data.password)
        cy.get('#RepeatPassword').type(this.data.password)
        cy.get('#TermsAndConditions').check()
        cy.get('#PrivacyPolicies').check()
        cy.get('.ok > .btn-sm').click()
        cy.wait(8000)
        cy.get('#IdLoyaltyAccount').type("12312312312312")
        cy.get('#CodeActivation').type("12345")
        cy.get('#NIP').type('1234')
    })*/
})