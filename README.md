# FASE 2 - BACKEND E QUALIDADE

## DESAFIO - NODE JS - O PRINCIPIO 

#### PROPOSTA

Uma empresa de tecnologia deseja implementar um serviço de notificação interna. O objetivo é criar uma aplicação web com Node.js e Express que permita aos usuarios adicioanr, listar e excluir notificações. Alem disso, vamos utilizar middlewares para autenticação e tratamento de erros.
Obs.: não é necessario bancos de dados para este desafio, você pode trabalhar com o fluxo em memoria.


##### PASSOS PARA RODAR

1.Clone o repositório

2.Instale as dependências:
npm install

3.Inicie o servidor:
npm start

4.Use o Postman para testar a API

Insira o token no cabeçalho:
Authorization: Bearer secrettoken123

Faça requisições para:

POST /notifications – Criar notificação

GET /notifications – Listar notificações

DELETE /notifications/:id – Deletar notificação

