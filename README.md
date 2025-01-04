# API de Posts

Uma API simples para criar e gerenciar posts, permitindo que os usuários adicionem imagens, textos alternativos (alt) e descrições, similar ao funcionamento de posts no Instagram.

## Funcionalidades

- **Adicionar Post**: Os usuários podem criar posts com uma imagem, um alt e uma descrição.
- **Listar Posts**: Recuperar todos os posts criados.
- **Obter Post por ID**: Detalhar um post específico.
- **Atualizar Post**: Editar as informações de um post.
- **Deletar Post**: Remover um post do sistema.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no backend.
- **MONGODB**: Banco de dados.


## Como Configurar

### Requisitos
- Node.js (v16 ou superior)
- npm (ou yarn)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   PORT=3000
   DATABASE_URL="file:./dev.db"
   ```

4. Configure o banco de dados com o Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

   O servidor estará rodando em `http://localhost:3000`.

## Rotas da API

### POST `/api/posts`
- **Descrição**: Cria um novo post.
- **Cabeçalho**:
  - `Content-Type`: `multipart/form-data`
- **Corpo da Requisição**:
  - `image`: Arquivo de imagem (upload via form-data).
  - `alt`: Texto alternativo para a imagem.
  - `description`: Descrição do post.

### GET `/api/posts`
- **Descrição**: Lista todos os posts.

### GET `/api/posts/:id`
- **Descrição**: Recupera os detalhes de um post específico.

### PUT `/api/posts/:id`
- **Descrição**: Atualiza um post.
- **Corpo da Requisição**:
  ```json
  {
    "alt": "Texto atualizado",
    "description": "Descrição atualizada"
  }
  ```

### DELETE `/api/posts/:id`
- **Descrição**: Remove um post do sistema.

## Melhorias Futuras

- Adicionar autenticação para criar e gerenciar posts.
- Implementar paginação na listagem de posts.
- Suporte a diferentes formatos de imagem.


