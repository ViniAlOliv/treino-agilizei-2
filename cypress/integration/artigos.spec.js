/// <reference types="cypress"/>

    import artigos from '../support/pages/artigos'
    import Routes from '../support/routes'

    beforeEach(() => {
        //Preparação
        Routes.init()
        cy.backgroundLogin()
        artigos.acessarFormularioDeNovaPublicacao()
    });

context('Artigos', () => {
    it('Criar uma nova publicação', () => {
        //Ação
        //Realizar uma autenticação do tipo POST com o usuário
        //Capturar token recebido na requisição
        //Usar token recebido para salvar na localstorage
        artigos.preencherFormulario()
        artigos.submeterPublicacao()
        
        //Verificação
        artigos.verificarSeAPublicacaoFoiCriadaComSucesso()
    })
});