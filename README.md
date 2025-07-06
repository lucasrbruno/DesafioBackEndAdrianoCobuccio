# DesafioBackEndAdrianoCorbuccio
Sistema de carteira financeira feita em NodeJS e MongoDB

## Tecnologias
  - Node-js: Plataforma principal que utiliza da ferramente Express pra construir a comunicação pelo lado do servidor
  - Javascript: linguagem utilizada na programação do NodeJS de forma mais padrão
  - MongoDB: Banco de dados não relacional utilizado no projeto

## Funcionalidades
 - Listar usuários: Lista todos os usuários presentes no banco de dados.
 - Listar transações: Lista todas as transações feitas presentes no banco de dados.
 - Cadastrar Usuário: Cadastra um novo usuário a partir das informações dadas, mantendo no banco de dados um hash criptográfico da sua senha.
 - Realizar transação: Cadastra uma nova transação, que pode ser saque, depósito ou transferência. Realiza as verificações necessárias para que um usuário não faça uma transação incompatível com o seu saldo atual.
 - Reverter transação: Reverte uma transação já feita, realizando as modificações necessárias nas contas dos usuários pertencentes a essa transação, além de remover a transação do banco de dados.
 - Fazer login de usuário: Faz o check da tentativa de login do usuário, analisando login e senha e verificando se ambos são válidos

## Build
 Para o projeto, deve estar instalado o NodeJS (versão mais recente) e o MongoDB (com um banco de dados válido para a utilização).
 
 Primeiro, clone o repositório:
 
  ```bash
  git clone git@github.com:lucasrbruno/DesafioBackEndAdrianoCobuccio.git
  cd nome_do_seu_repositorio
  ```

Depois, instale as dependências do projeto utilizando o gerenciador de pacotes npm:

```bash
npm install
```

Para rodar o projeto:

```bash
node server.js
```


# Documentação
A documentação do projeto foi realizada via APIDOC, e pode ser aberta através do arquivo docs/index.html

# Considerações Finais
Este projeto foi realizado como desafio para a vaga de Desenvolvedor Back-End da empresa Grupo Adriano Cobuccio. Não foi possível realizar os testes de integração e unidade por falta de tempo. Estou aberto para qualquer sugestão e críticas construtivas para melhorar o meu trabalho como desenvolvedor. Desde já, agradeço a compreensão.
