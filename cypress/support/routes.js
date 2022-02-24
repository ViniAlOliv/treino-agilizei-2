class Routes {
    
    as = {
        postArtigos: 'POSTArtigo',
        getArtigosTitulo: 'GETArtigosTitulo',
        getArtigosComentarios: 'GETArtigosComentarios'
    }
    
    init() {
        cy.server()
        cy.route('POST', '**/api/articles' ).as(this.as.postArtigos);
        cy.route('GET', '**/api/articles/**' ).as(this.as.getArtigosTitulo);
        cy.route('GET', '**/api/articles/**/comments' ).as(this.as.getArtigosComentarios);
    }

}
export default new Routes()