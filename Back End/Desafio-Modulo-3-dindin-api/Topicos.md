# Planejamento da Implementação da API Dindin

Este documento apresenta o planejamento detalhado para a implementação da API Dindin, uma aplicação RESTful que permite aos usuários gerenciar suas transações financeiras. A API será construída em Node.js, utilizando Express.js como framework web, PostgreSQL como banco de dados e as seguintes bibliotecas:

- **bcrypt**: Para criptografia de senhas.
- **dotenv**: Para gerenciamento de variáveis de ambiente.
- **express**: Para criação de rotas e middlewares.
- **jsonwebtoken**: Para geração e validação de tokens de autenticação.
- **pg**: Para conexão com o banco de dados PostgreSQL.

## Requisitos

### Funcionalidades Principais:

1. **Usuários:**
   - Cadastrar Usuário
   - Fazer Login
   - Detalhar Perfil do Usuário Logado
   - Editar Perfil do Usuário Logado

2. **Categorias:**
   - Listar Categorias

3. **Transações:**
   - Listar Transações
   - Detalhar Transação
   - Cadastrar Transação
   - Editar Transação
   - Remover Transação
   - Obter Extrato de Transações

### Requisitos Adicionais:

- Todos os endpoints devem exigir um token de autenticação do usuário logado (formato Bearer Token).
- Validar se o token foi enviado no header da requisição.
- Validar a validade do token.
- Consultar usuário no banco de dados pelo ID contido no token informado.

## Estrutura de Dados

### Banco de Dados (PostgreSQL):

1. **Tabela `usuarios`:**
   - id (Chave Primária, Auto Incremento)
   - nome
   - email (Campo Único)
   - senha

2. **Tabela `categorias`:**
   - id (Chave Primária, Auto Incremento)
   - descricao

3. **Tabela `transacoes`:**
   - id (Chave Primária, Auto Incremento)
   - descricao
   - valor
   - data
   - categoria_id (Chave Estrangeira referenciando `categorias`)
   - usuario_id (Chave Estrangeira referenciando `usuarios`)
   - tipo (entrada/saida)

### Validações e Segurança:

- Campos obrigatórios devem ser validados para todas as operações.
- Senhas devem ser criptografadas usando bcrypt antes de serem armazenadas no banco de dados.
- Garantir que cada usuário só pode ver e manipular seus próprios dados e transações.

## Endpoints da API

1. **Cadastro e Login:**
   - `POST /usuario`: Cadastrar um novo usuário.
   - `POST /login`: Permitir o login do usuário.

2. **Perfil do Usuário:**
   - `GET /usuario`: Detalhar o perfil do usuário logado.
   - `PUT /usuario`: Atualizar as informações do usuário logado.

3. **Categorias:**
   - `GET /categoria`: Listar todas as categorias cadastradas.

4. **Transações:**
   - `GET /transacao`: Listar as transações do usuário logado.
   - `GET /transacao/:id`: Detalhar uma transação específica do usuário logado.
   - `POST /transacao`: Cadastrar uma nova transação para o usuário logado.
   - `PUT /transacao/:id`: Atualizar uma transação específica do usuário logado.
   - `DELETE /transacao/:id`: Excluir uma transação específica do usuário logado.
   - `GET /transacao/extrato`: Obter o extrato de todas as transações do usuário logado.

Este planejamento detalhado servirá como guia durante o desenvolvimento da API Dindin, garantindo que todas as funcionalidades e requisitos sejam implementados de forma eficiente e segura.