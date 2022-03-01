const el = require('./elements').ELEMENTS
import Routes from '../../routes'

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

    validarCadastroNovoUsuario() {
        /**cy.wait(`@${Routes.as.postCadastro}`).then((postCadastroResponse) => {
            expect(postCadastroResponse.status).to.eq(200)
        })**/

        cy.wait(`@${Routes.as.getCadastroUsers}`).then((getCadastroUsersResponse) => {
            expect(getCadastroUsersResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getCadastroArticlesPage}`).then((getCadastroArticlesPageResponse) => {
            expect(getCadastroArticlesPageResponse.status).to.eq(200)
        })
    }
    
}

export default new Cadastro();