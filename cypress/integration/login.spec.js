/// <reference types="cypress"/>

import login from '../support/pages/login';

describe('Login', () => {
    it('Realizar Login com sucesso', () => {
        login.acessarPaginaDeLogin()
        login.preencherUsuarioESenha()
        login.acessarOStite()

    })
});