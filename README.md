# API de Posts

Uma API simples para criar e gerenciar posts, permitindo que os usuários adicionem imagens, textos alternativos (alt) e descrições, similar ao funcionamento de posts no Instagram.

## Funcionalidades

- **Adicionar Post**: Os usuários podem criar posts com uma imagem, um alt e uma descrição.
- **Listar Posts**: Recuperar todos os posts criados.
- **Obter Post por ID**: Detalhar um post específico.
- **Atualizar Post**: Editar as informações de um post.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no backend.
- **MONGODB**: Banco de dados NoSQL utilizado para armazenamento dos posts.
- **Gemini API**: Utilizada para gerar descrições automáticas para as imagens.


## Como Configurar

### Requisitos
- Node.js (v16 ou superior)
- npm (ou yarn)
- Conta na Gemini API para obter a chave de API.
- Banco de dados MongoDB configurado.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gabriel-Gald1n0/APIs-Node.git
   cd APIs-Node
   git checkout API-Posts-Instagram
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   NEW_CHAVE_DB_CONEXAO="sua-string-de-conexão-do-mongodb"
   CHAVE_API="sua-chave-da-api-gemini"
   ```

   - **Obter chave da Gemini API**:
     1. Acesse o site da [Gemini API](https://geminiapi.com/).
     2. Crie uma conta ou faça login.
     3. Navegue até o painel do desenvolvedor e gere uma nova chave de API.
     4. Copie a chave gerada e insira no `.env` como `CHAVE_API`.

   - **Obter string de conexão do MongoDB**:
     1. Acesse o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou outro serviço MongoDB.
     2. Crie um cluster gratuito ou use uma instância existente.
     3. No painel do MongoDB Atlas, clique em "Connect" e escolha "Connect your application".
     4. Copie a string fornecida e substitua `<password>` pela senha do usuário configurado.
     5. Insira essa string no `.env` como `NEW_CHAVE_DB_CONEXAO`.

4. Inicie o servidor:
   ```bash
   npm run start
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
  }
  ```

## Melhorias Futuras

- Adicionar autenticação para criar e gerenciar posts.
- Implementar paginação na listagem de posts.
- Suporte a diferentes formatos de imagem.


