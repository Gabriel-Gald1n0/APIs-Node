# API de Lista de Tarefas com Autenticação

Esta é uma API de Lista de Tarefas desenvolvida com Node.js, Express, Prisma e SQLite. A API permite que os usuários se registrem, façam login e gerenciem suas tarefas.

## Funcionalidades

- **Registro de Usuários**: Criação de contas de usuários com senhas seguras (hash com bcrypt).
- **Autenticação**: Login utilizando JWT para controle de sessão.
- **Gerenciamento de Tarefas**:
  - Criação de tarefas.
  - Listagem de tarefas do usuário logado.
  - Atualização de tarefas.
  - Exclusão de tarefas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no backend.
- **Express**: Framework para criação de APIs.
- **Prisma**: ORM para interação com o banco de dados.
- **SQLite**: Banco de dados leve e embutido.
- **bcrypt**: Biblioteca para hash de senhas.
- **JWT (jsonwebtoken)**: Biblioteca para geração de tokens de autenticação.

## Requisitos

- Node.js (v16 ou superior)
- npm (ou yarn)

## Configuração do Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gabriel-Gald1n0/APIs-Node.git
   cd APIs-Node
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   DATABASE_URL="file:../database/dev.db"
   PORT=3000
   JWT_SECRET="sua_chave_secreta"
   ```

4. Configure o banco de dados com o Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Inicie o servidor:
   ```bash
   npx nodemon server.js
   ```

   O servidor estará rodando em `http://localhost:3000`.

## Endpoints

### Autenticação

#### POST `/api/auth/register`
- **Descrição**: Registra um novo usuário.
- **Corpo da Requisição**:
  ```json
  {
    "username": "exemplo",
    "password": "senha123"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Usuário registrado com sucesso!"
  }
  ```

#### POST `/api/auth/login`
- **Descrição**: Faz login de um usuário.
- **Corpo da Requisição**:
  ```json
  {
    "username": "exemplo",
    "password": "senha123"
  }
  ```
- **Resposta**:
  ```json
  {
    "token": "jwt_token"
  }
  ```

### Tarefas

#### GET `/api/tasks`
- **Descrição**: Lista todas as tarefas do usuário logado.
- **Autenticação**: Necessária (JWT no cabeçalho `Authorization`).

#### POST `/api/tasks`
- **Descrição**: Cria uma nova tarefa.
- **Corpo da Requisição**:
  ```json
  {
    "title": "Minha tarefa",
    "description": "Detalhes da tarefa"
  }
  ```

#### PUT `/api/tasks/:id`
- **Descrição**: Atualiza uma tarefa existente.
- **Corpo da Requisição**:
  ```json
  {
    "title": "Tarefa atualizada",
    "description": "Novos detalhes"
  }
  ```

#### DELETE `/api/tasks/:id`
- **Descrição**: Exclui uma tarefa.

## Melhorias Futuras

- Implementar paginação para a listagem de tarefas.
- Adicionar validação mais robusta para entradas do usuário.
- Criar testes automatizados.


