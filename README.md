
🌐 Web Project API Full
Este projeto é a versão final do app Around the U.S., desenvolvido durante o curso de Desenvolvimento Web da TripleTen. Ele combina um front-end em React com um back-end em Node.js/Express e MongoDB, oferecendo funcionalidades completas de registro, autenticação e manipulação de cartões com imagens.


https://web-project-api-full-ochre.vercel.app/signin

🚀 Funcionalidades
Registro de usuários com email e senha

Autenticação com JWT

Proteção de rotas no front-end e back-end

Edição de perfil e avatar do usuário

Criação e exclusão de cartões com imagens

Curtidas e descurtidas nos cartões

Validação de dados com celebrate e validator

Tratamento centralizado de erros

Logs de requisições e erros

Implantação com domínio, HTTPS e PM2

🧱 Estrutura do Repositório
bash
Copiar
Editar
web_project_api_full/
├── backend/     # Código back-end com Express + MongoDB
├── frontend/    # Aplicação React
├── .gitignore
├── README.md
🛠 Tecnologias Utilizadas
Back-end
Node.js

Express.js

MongoDB + Mongoose

bcryptjs

jsonwebtoken (JWT)

celebrate + Joi

validator

winston + express-winston (logs)

dotenv

CORS

Helmet

PM2

Front-end
React

React Router

Context API

Fetch API

JSX

LocalStorage

CSS Responsivo

🔒 Segurança
Senhas são criptografadas com bcrypt

JWT usado para autenticação e autorização

Middleware para proteger rotas

Dados sensíveis em .env (não incluído no repositório)

HTTPS habilitado na implantação com Nginx + Certbot

🧪 Teste de Estabilidade
Para simular uma falha no servidor e testar o reinício automático com PM2, há uma rota de crash:

bash
Copiar
Editar
GET /crash-test
🌍 Implantação
O projeto está implantado em um servidor remoto com:

Front-end React compilado e servido via Nginx

Back-end Node.js rodando com PM2

Domínio personalizado com HTTPS

📄 Variáveis de Ambiente (.env no servidor)
env
Copiar
Editar
NODE_ENV=production
JWT_SECRET=uma_senha_secreta_segura
PORT=3000
📝 Como rodar localmente
Pré-requisitos:
Node.js

MongoDB (local ou Atlas)

Instalação do back-end
bash
Copiar
Editar
cd backend
npm install
npm run dev
Instalação do front-end
bash
Copiar
Editar
cd frontend
npm install
npm start
👨‍💻 Autor
Guilherme Galvão

