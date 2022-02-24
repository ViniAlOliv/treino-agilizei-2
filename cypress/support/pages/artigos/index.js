/// <reference types="cypress"/>
const el = require('./elements').ELEMENTS

import Routes from '../../routes'

let Chance = require('chance');
let chance = new Chance();

class Artigos {
    
    acessarFormularioDeNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario(){
        cy.get(el.inputTitle).type(chance.animal())
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaBody).type('Testinho =)')
        cy.get(el.tagField).type('Cypress')
    }
    
    submeterPublicacao() {
        //ROTAS
        //POST https://api.realworld.io/api/articles
        //GET https://api.realworld.io/api/articles/Duck-3684
        //GET https://api.realworld.io/api/articles/Duck-3684/comments

        //GET 200 https://conduit.productionready.io/api/articles/Gerbils-3684
        //GET 200 https://conduit.productionready.io/api/articles/Gerbils-3684/comments

        //Botão Clicar
        cy.get(el.submitButton).click();
    }
        
    verificarSeAPublicacaoFoiCriadaComSucesso(){
        //Conceito de template String dentro de cy.wait
        cy.wait(`@${Routes.as.postArtigos}`).then((postArtigosResponse) => {
            expect(postArtigosResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArtigosTitulo}`).then((getArtigosTituloResponse) => {
            expect(getArtigosTituloResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArtigosComentarios}`).then((getArtigosComentariosResponse) => {
            expect(getArtigosComentariosResponse.status).to.eq(200)
        })
    }
    
}

export default new Artigos();