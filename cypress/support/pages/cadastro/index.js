const el = require('./elements').ELEMENTS

let Chance = require('chance');
let chance = new Chance();

class Cadastro {

    visitarPaginaDeNovoUsuario() {
        cy.visit('register')
    }
    
    preencherInformacoesDeCadastro() {
        cy.get(el.inputUsername).type(chance.name())
        cy.get(el.inputEmail).type(chance.email())
        cy.get(el.inputPasswor).type(chance.month())
    }
        
    clicarEmCadastrar() {
        cy.get(el.buttonSubmit).click()
    }
    
}

export default new Cadastro();