import express from 'express';

import authRouter from './routes/authRouter.js';
import protectedRouter from './routes/protectedRouter.js';

import path from "path";
import { fileURLToPath } from "url";



// __dirname para módulos ES
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);


const app = express();

// Configura o EJS
app.set("view engine", "ejs");
// Sempre aponta para src/views, independente do diretório de execução
app.set("views", path.join(process.cwd(), "src", "views"));


// Middleware para parsing de JSON e dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static('public'));



app.use('/auth', authRouter);
app.use('/protected', protectedRouter);


const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



/*Resumo:
    Model: 
        Dados e regras de negócio.
    ViewModel: 
        Adapta/prepara dados para a View.
    View: 
        Interface com o usuário (API, página, etc).


        No frontend (React, Angular, etc), o MVVM é ainda mais comum, mas no backend ele ajuda a manter o código limpo e organizado, separando transformação de dados da lógica de negócio e da interface.
        Em projetos maiores, o MVVM pode ser implementado com frameworks como NestJS (backend) ou bibliotecas como MobX (frontend).
        No exemplo acima, usamos EJS como motor de templates para renderizar views no backend.
        Em projetos simples, o MVVM pode parecer excessivo, mas em sistemas complexos ele traz muitos benefícios em termos de organização e manutenção do código.
        Em projetos reais, o ViewModel pode incluir validação de dados, formatação, e outras lógicas específicas da apresentação.
*/