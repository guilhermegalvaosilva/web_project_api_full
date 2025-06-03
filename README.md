# Around The U.S. - Projeto Fullstack

Este repositório contém uma aplicação web fullstack composta por um backend em Node.js/Express e um frontend em React. O objetivo é permitir que usuários se cadastrem, façam login, criem cards de lugares, curtam e excluam cards, além de editar seu perfil e avatar.

## Estrutura do Projeto

```
.
├── backend/
│   ├── app.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── ...
└── README.md
```

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Celebrate/Joi, dotenv
- **Frontend:** React, Vite, React Router, Context API, CSS Modules
- **Outros:** ESLint, Winston, CORS

## Como rodar o projeto

### Pré-requisitos

- Node.js (v16+)
- MongoDB

### Backend

1. Acesse a pasta `backend`:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o arquivo `.env` (já existe um exemplo no repositório):
   ```
   MONGO_URI=mongodb://localhost:27017/aroundb
   JWT_SECRET=suaChaveSecreta
   ```
4. Inicie o servidor:
   ```sh
   npm run dev
   ```
   O backend rodará por padrão na porta 7000.

### Frontend

1. Acesse a pasta `frontend`:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o frontend:
   ```sh
   npm run dev
   ```
   O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- Cadastro e login de usuários com autenticação JWT
- Edição de perfil e avatar
- Criação, curtir/descurtir e exclusão de cards
- Validação de formulários
- Mensagens de feedback e erros amigáveis

## Variáveis de Ambiente

No backend, configure as seguintes variáveis no arquivo `.env`:

```
MONGO_URI=mongodb://localhost:27017/aroundb
JWT_SECRET=suaChaveSecreta
```

## Scripts Úteis

### Backend

- `npm run dev` — inicia o servidor com nodemon
- `npm start` — inicia o servidor em modo produção
- `npm run lint` — executa o ESLint

### Frontend

- `npm run dev` — inicia o frontend em modo desenvolvimento
- `npm run build` — gera a build de produção
- `npm run lint` — executa o ESLint

## Licença

Este projeto é apenas para fins educacionais.

---

Desenvolvido por Pedro Henrique.
