const el = require('./elements').ELEMENTS

let Chance = require('chance');
let chance = new Chance();

class Login {

    acessarPaginaDeLogin() {
        cy.visit('login');
    }

    preencherUsuarioESenha() {
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type(Cypress.config().user.password)
    }

    acessarOStite() {
        cy.get(el.buttonSubmit).click()
    }
    
}

export default new Login();