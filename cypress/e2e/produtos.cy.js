/// <reference types="cypress"/>
import contrato from '../contratos/produtos.contrato'

describe('Teste de API em Produtos', () => {

    let token
    beforeEach(() => {
        cy.token('beltrano@qa.com.br', 'teste').then(tkn => {
            token = tkn
        })
    });
    it.only('Deve validar contrato de produtos com sucesso', () => {
        cy.request('produtos').then(response => {
            return contrato.validateAsync(response.body)
        })
    });

    it('Deve listar produtos com sucesso - GET', () => {
        cy.request({
            method: 'GET',
            url: '/produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
        
    });

    it('Deve cadastrar produto com sucesso - POST', () => {
        let produto = 'Produto EBAC ' + Math.floor(Math.random() * 1000000000)
        cy.cadastrarProduto(token, produto, 100, 'Produto EBAC', 200)
        .should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        })
        
    });

    it('Deve validar mensagem de produto cadastrado anteriormente - POST', () => {
        cy.cadastrarProduto(token, 'Razer Naga', 600, 'Mouse', 200)
        .should((response) => {
            expect(response.status).equal(400)
            expect(response.body.message).equal('Já existe produto com esse nome')
        });
    
    });

    it('Deve editar um produto com sucesso - PUT', () => {
        let produto = 'Produto EBAC ' + Math.floor(Math.random() * 1000000000)
        cy.cadastrarProduto(token, produto, 100, 'Produto EBAC', 200)
            .then(response => {
                let id = response.body._id
        cy.editarProduto(id, token, produto, Math.floor(Math.random() * 350), 'Produto EBAC', Math.floor(Math.random() * 1000))
            .should((response) => {
                expect(response.status).equal(200)
                expect(response.body.message).equal('Registro alterado com sucesso')
            })
        })
        
    });
    
    it('Deve deletar um produto com sucesso - DELETE', () => {
        let produto = 'Produto EBAC ' + Math.floor(Math.random() * 1000000000)
        cy.cadastrarProduto(token, produto, 100, 'Produto EBAC', 200)
            .then(response => {
                let id = response.body._id
        cy.request({
            method: 'DELETE',
            url: '/produtos/' + id,
            headers: {authorization: token}
        }).should(resp => {
            expect(resp.status).equal(200)
            expect(resp.body.message).equal('Registro excluído com sucesso')
   
        });

    })

})

})