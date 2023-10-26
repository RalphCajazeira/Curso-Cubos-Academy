Entendido! Se você está utilizando o PostgreSQL como banco de dados, aqui está uma atualização da estrutura de pastas e arquivos, levando em consideração o PostgreSQL como o sistema de gerenciamento de banco de dados:

```
projeto-pdv/
  ├── node_modules/
  ├── src/
  |   ├── bancoDeDados/
  |   |   └── conexao_bd.js
  |   ├── controladores/
  |   |   ├── categoriaControlador.js
  |   |   └── usuarioControlador.js
  |   ├── rotas/
  |   |   ├── categoriaRotas.js
  |   |   └── usuarioRotas.js
  |   ├── utils/
  |   |   ├── autenticacaoUtil.js
  |   |   ├── validacoesUtil.js
  |   |   └── criptografiaUtil.js
  |   └── index.js
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  └── README.md
```

### **Explicação da Estrutura:**

- **`bancoDeDados/`**: Contém o arquivo `conexao_bd.js` que configura a conexão com o banco de dados PostgreSQL.

- **`controladores/`**: Contém os controladores para as entidades `Categoria` e `Usuário`.

- **`rotas/`**: Contém os arquivos de rotas para as entidades `Categoria` e `Usuário`.

- **`utils/`**: Contém arquivos utilitários para funcionalidades comuns como autenticação e validações.

- **`index.js`**: Arquivo principal do seu servidor, onde você configura as rotas, a conexão com o banco de dados e inicia o servidor.

- **`.gitignore`**: Arquivo para especificar quais arquivos e pastas devem ser ignorados pelo Git (por exemplo, a pasta `node_modules/`).

- **`package.json`** e **`package-lock.json`**: Arquivos de configuração do Node.js que contêm informações sobre as dependências do projeto.

- **`README.md`**: Documentação do seu projeto.

### **Distribuição de Tarefas:**

- **`bancoDeDados/conexao_bd.js`**: Configuração da conexão com o PostgreSQL (pode ser uma tarefa compartilhada entre membros, caso necessário).

- **`controladores/`**, **`rotas/`** e **`utils/`**: Distribuição de acordo com as tarefas específicas de cada membro (como mencionado anteriormente).

Lembre-se de ajustar os detalhes da configuração do PostgreSQL (como nome do banco de dados, nome do usuário, senha, host, etc.) no arquivo `conexao_bd.js` conforme necessário para a sua configuração específica.

Boa colaboração na Sprint e sucesso com o seu projeto! 🚀

#**1ª Sprint**

**1ª Pessoa:**
- **Banco de Dados:**
  - Criar o banco de dados PostgreSQL chamado `pdv`.
  - Criar o arquivo SQL com os comandos de criação das tabelas `usuarios` e `categorias`.
  - Inserir as categorias pré-definidas no banco de dados.

**2ª Pessoa:**
- **Autenticação e Usuários:**
  - Implementar o endpoint `POST /usuario` para cadastrar usuários.
  - Implementar o endpoint `POST /login` para realizar login e gerar tokens de autenticação.
  - Implementar o middleware para validar tokens de autenticação.

**3ª Pessoa:**
- **Perfil do Usuário:**
  - Implementar o endpoint `GET /usuario` para detalhar o perfil do usuário logado.
  - Implementar o endpoint `PUT /usuario` para permitir a atualização do perfil do usuário logado.

**4ª Pessoa:**
- **Listar Categorias:**
  - Implementar o endpoint `GET /categoria` para listar as categorias cadastradas.

**5ª Pessoa:**
- **Deploy:**
  - Fazer o deploy do projeto e disponibilizar a URL.

**Observações Importantes:**
- Cada pessoa deve garantir que a sua parte do código esteja bem documentada, seguindo as boas práticas de programação.
- As rotas e funcionalidades implementadas devem ser testadas para garantir que estão funcionando conforme esperado.
- Certifique-se de que a autenticação está sendo realizada corretamente antes de implementar as funcionalidades relacionadas ao perfil do usuário.
- Se houver dúvidas ou problemas, a comunicação entre as pessoas do grupo é fundamental para garantir o bom andamento do projeto.
