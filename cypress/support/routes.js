class Routes {
    
    as = {
        postArtigos: 'POSTArtigo',
        getArtigosTitulo: 'GETArtigosTitulo',
        getArtigosComentarios: 'GETArtigosComentarios',

        postCadastro: 'POSTCadastro',
        getCadastroUsers: 'GETCadastroUsers',
        getCadastroArticlesPage: 'GETCadastroArticlesPage'
    }
    
    init() {
        cy.server()
        cy.route('POST', '**/api/articles' ).as(this.as.postArtigos);
        cy.route('GET', '**/api/articles/**' ).as(this.as.getArtigosTitulo);
        cy.route('GET', '**/api/articles/**/comments' ).as(this.as.getArtigosComentarios);
    }

    initCadastro() {
        cy.server()
        cy.route('POST', 'https://conduit.productionready.io/api/users').as(this.as.postCadastro)
        cy.route('GET', 'https://conduit.productionready.io/api/tags').as(this.as.getCadastroUsers)
        cy.route('GET', 'https://conduit.productionready.io/api/articles/feed?limit=10&offset=0').as(this.as.getCadastroArticlesPage)
    }

}
export default new Routes()