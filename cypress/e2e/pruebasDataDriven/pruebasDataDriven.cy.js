/// <reference types = "Cypress"/>

describe("Segundo conjunto de pruebas", function (){
    before(function(){
        cy.fixture('example').then(function(datos){
            this.datos = datos
            cy.fixture(this.datos.imagen).as('imagen')
        })
    })

    /*beforeEach(()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
    })*/

    it('Llenamos nuesgtro primer forms usando data', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#close-fixedban > img').click()
        cy.get('#close-fixedban > img').click()
        cy.get('#firstName').type(this.datos.nombre)
        cy.get('#lastName').type(this.datos.apellido)
        cy.get('#userEmail').type(this.datos.email)
        cy.get('input[name="gender"][value="' + this.datos.sexo +'"]').check({force:true}).should('be.checked')
        cy.get('#userNumber').type(this.datos.telefono)
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.fechaDeNacimiento[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.fechaDeNacimiento[1])
        // cy.get('.react-datepicker__month').should('be.visible').select(this.datos.fechaDeNacimiento[2])
        cy.get('.react-datepicker__day--0' + this.datos.fechaDeNacimiento[2]).should('be.visible').click()
        cy.get('#dateOfBirthInput')
            .should('contain.value', this.datos.fechaDeNacimiento[0].substring(0,3))
            .should('contain.value', this.datos.fechaDeNacimiento[1])
            .should('contain.value', this.datos.fechaDeNacimiento[2])
        cy.get('.subjects-auto-complete__value-container').type(this.datos.materia)
        cy.get('div[id^="react-select-"]').click()
        cy.get('.subjects-auto-complete__value-container').should('contain.text', this.datos.materia)

        cy.get('.subjects-auto-complete__value-container').type("Maths")
        cy.get('div[id^="react-select-"]').click()
        // hacer lo mismo del profe pero en otra pagina web
        cy.get('#uploadPicture').then(function($el){
            // convertir la imagen a string base64
            const blob = Cypress.Blob.base64StringToBlob(this.imagen, 'image/png')
            const file = new File([blob], this.datos.imagen, {type: 'image/png'})
            const list = new DataTransfer()
            list.items.add(file)
            const myFileList = list.files
            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', { bubbles: true }))
            
        })
        cy.get('#currentAddress').type(this.datos.direccion)
        cy.get('#close-fixedban > img').click()
        //cy.get('#close-fixedban > img').click()
        //cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
        //cy.get('#close-fixedban').click()
        //cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
        //cy.get('#react-select-3-input').type(this.datos.estado).type('{enter}')
        //cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').type(this.datos.ciudad)
        /*cy.get('#state').click()
        cy.get('div[class=" css-26l3qy-menu"]').contains(this.datos.estado).click()*/
        //cy.get('#city').click()
        //cy.get('div[class=" css-26l3qy-menu"]').contains(this.datos.ciudad).click()
        //cy.get('#currentAddress').type(this.datos.direccion)
        //cy.get('#state').click().find("div:contains('" + this.datos.estado + "')[id*='react-select']")
        //cy.get('#city').click().find("div:contains('" + this.datos.ciudad + "')[id*='react-select']")
        
        cy.get('#stateCity-wrapper > :nth-child(2)').type(this.datos.estado)
        cy.get('#state > .css-26l3qy-menu > .css-11unzgr').should('be.visible').click()
        cy.get('#stateCity-wrapper > :nth-child(3)').click()
        cy.get('#react-select-4-input').should('be.visible').type(this.datos.ciudad).click()
        
        cy.wait(2000)
        cy.get('#submit').click({force:true})
        cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
            cy.get('td:contains(Student Name)+td')
            .should('have.text', this.datos.nombre + " " +this.datos.apellido)
            cy.get('td:contains(Student Email)+td').should('have.text',this.datos.email)
            cy.get('td:contains(Gender)+td').should('have.text',this.datos.sexo)
            cy.get('td:contains(Mobile)+td').should('have.text',this.datos.telefono)
            cy.get('td:contains(Date of Birth)+td')
            .should('have.text',this.datos.fechaDeNacimiento[2] +" "+ this.datos.fechaDeNacimiento[0] +","+ this.datos.fechaDeNacimiento[1])
            cy.get('td:contains(Subjects)+td').should('have.text', this.datos.materia +", "+'Maths')
            cy.get('td:contains(Picture)+td').should('have.text','my_image.png')
            cy.get('td:contains(Address)+td').should('have.text',this.datos.direccion)
            cy.get('td:contains(State and City)+td').should('have.text',this.datos.estado + " "+ this.datos.ciudad)

    })

})

Cypress.on('uncaught:exception', (err,runable) => {
    console.log("err: " + err)
    console.log("runnable :" + runable)
    return false
})