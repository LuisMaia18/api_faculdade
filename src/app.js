// Importações de bibliotecas e arquivos locais
import express from "express"; // Framework para criação da API
import fs from "fs"; // Módulo para manipular arquivos
import db from "./database.js"; // Conexão com o banco de dados
import { validatePost } from "./utils/validateFields.js"; // Função de validação dos dados dos posts
import { errorHandler } from "./middlewares/errorHandler.js"; // Middleware para tratar erros
import swaggerUi from "swagger-ui-express"; // Middleware para documentar a API
import helmet from "helmet"; // Middleware para segurança HTTP

// Carrega o arquivo de documentação da API (Swagger)
const swaggerDocument = JSON.parse(fs.readFileSync("./src/swagger.json", "utf-8"));

const app = express();

// Middlewares globais
app.use(express.json()); // Permite ler o corpo das requisições em JSON
app.use(helmet()); // Aplica medidas de segurança HTTP
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Rota da documentação da API
app.use(errorHandler); // Middleware de tratamento de erros

// Rota principal de teste
app.get("/", (req, res) => {
    res.status(200).send("API com Express e Node.js");
});

// Rota GET para listar todos os posts
app.get("/posts", (req, res) => {
    try {
        const posts = db.prepare("SELECT * FROM posts").all(); // Busca todos os posts
        res.status(200).json(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error.message);
        res.status(500).send("Erro ao buscar posts");
    }
});

// Rota POST para criar um novo post
app.post("/posts", (req, res) => {
    const { error } = validatePost(req.body); // Valida os dados
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { title, description, author } = req.body;

    try {
        const stmt = db.prepare("INSERT INTO posts (title, description, author) VALUES (?, ?, ?)");
        stmt.run(title, description, author); // Insere o post no banco
        res.status(201).send("Post adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar post:", error.message);
        res.status(500).send("Erro ao adicionar post");
    }
});

// Rota GET para buscar um post pelo ID
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    try {
        const post = db.prepare("SELECT * FROM posts WHERE id = ?").get(id); // Busca o post pelo ID
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).send("Post não encontrado");
        }
    } catch (error) {
        console.error("Erro ao buscar post:", error.message);
        res.status(500).send("Erro ao buscar post");
    }
});

// Rota PUT para atualizar um post
app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, author } = req.body;
    if (!title || !description || !author) {
        return res.status(400).send("Todos os campos são obrigatórios: title, description, author");
    }

    try {
        const stmt = db.prepare("UPDATE posts SET title = ?, description = ?, author = ? WHERE id = ?");
        const result = stmt.run(title, description, author, id); // Atualiza o post
        if (result.changes > 0) {
            res.status(200).send("Post atualizado com sucesso!");
        } else {
            res.status(404).send("Post não encontrado");
        }
    } catch (error) {
        console.error("Erro ao atualizar post:", error.message);
        res.status(500).send("Erro ao atualizar post");
    }
});

// Rota DELETE para excluir um post
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    try {
        const stmt = db.prepare("DELETE FROM posts WHERE id = ?");
        const result = stmt.run(id); // Exclui o post do banco
        if (result.changes > 0) {
            res.status(200).send("Post excluído com sucesso!");
        } else {
            res.status(404).send("Post não encontrado");
        }
    } catch (error) {
        console.error("Erro ao excluir post:", error.message);
        res.status(500).send("Erro ao excluir post");
    }
});

// Exporta o app para ser usado no servidor (ex: index.js)
export default app;
