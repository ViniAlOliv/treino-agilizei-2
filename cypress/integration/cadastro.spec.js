/// <reference types="cypress"/>

import cadastro from '../support/pages/cadastro';
import routes from '../support/routes';

    beforeEach(() => {
       //Preparação
       routes.initCadastro()
       cadastro.visitarPaginaDeNovoUsuario() 
    })

context('Cadastro', () => {0
    it('Cadastrar um novo usuário', () => {
        //Ação
        cadastro.preencherInformacoesDeCadastro()
        cadastro.clicarEmCadastrar()

        //Validação
        cadastro.validarCadastroNovoUsuario()
        //POST 200 https://conduit.productionready.io/api/users
        //GET 200 https://conduit.productionready.io/api/tags
        //GET 200 https://conduit.productionready.io/api/articles/feed?limit=10&offset=0



    })
});