# Planejamento para Desenvolvimento da API-PDV

## Introdução
O projeto consiste em desenvolver uma API Rest para um PDV (Frente de Caixa), que permitirá o cadastro e gerenciamento de usuários, categorias, clientes, pedidos e produtos. A aplicação será baseada em Node.js e utilizará o banco de dados PostgreSQL. Este planejamento visa guiar a equipe de desenvolvimento durante o processo de implementação do projeto.

## 1. Banco de Dados

### 1.1 Criação do Banco de Dados
- Criar um banco de dados PostgreSQL chamado `pdv`.

### 1.2 Criar Tabelas
- **usuarios**
  - id (serial, primary key)
  - nome (string)
  - email (string, unique)
  - senha (string, bcrypt hashed)

- **categorias**
  - id (serial, primary key)
  - descricao (string)

## 2. Endpoints e Funcionalidades

### 2.1 Autenticação
- **POST** `/usuario` 
  - Criar endpoint para cadastrar um novo usuário.
  - Validar campos obrigatórios: nome, email, senha.
  - Criptografar senha antes de salvar no banco de dados.
  - Responder com token de autenticação.

- **POST** `/login`
  - Criar endpoint para efetuar login de usuários cadastrados.
  - Validar email e senha.
  - Gerar token de autenticação.

### 2.2 Usuário Autenticado
- **GET** `/usuario`
  - Rota para detalhar perfil do usuário logado.
  - Requer autenticação.
  
- **PUT** `/usuario`
  - Rota para editar perfil do usuário logado.
  - Validar campos obrigatórios: nome, email, senha.
  - Criptografar nova senha antes de salvar no banco de dados.
  - Requer autenticação.

### 2.3 Categorias
- **GET** `/categoria`
  - Rota para listar todas as categorias cadastradas.
  - Requer autenticação.

### 2.4 Deploy
- Fazer o deploy do projeto.
- Disponibilizar a URL da API.

## 3. Status Codes e Validations
- **200 (OK):** Resposta bem-sucedida.
- **201 (Created):** Requisição bem-sucedida e algo foi criado.
- **204 (No Content):** Requisição bem-sucedida, sem conteúdo no corpo da resposta.
- **400 (Bad Request):** Requisição inválida ou mal formatada.
- **401 (Unauthorized):** Usuário não autenticado.
- **403 (Forbidden):** Usuário não tem permissão para acessar o recurso.
- **404 (Not Found):** Recurso solicitado não encontrado.
- **500 (Internal Server Error):** Erro inesperado do servidor.

## Conclusão
Este planejamento fornece uma visão geral das funcionalidades necessárias para a API-PDV. A equipe deve seguir as diretrizes apresentadas, garantindo a correta implementação dos endpoints e a integração com o banco de dados PostgreSQL. Cada membro do grupo deve se responsabilizar por uma parte específica do desenvolvimento para garantir uma implementação eficiente e organizada do projeto. Certifique-se de validar todas as entradas e saídas de dados, além de garantir a segurança adequada, especialmente durante a autenticação e autorização dos usuários.
