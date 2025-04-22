import express from "express";
import db from "./database.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("API com Express e Node.js");
});

app.get("/posts", (req, res) => {
    try {
        const posts = db.prepare("SELECT * FROM posts").all();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error.message);
        res.status(500).send("Erro ao buscar posts");
    }
});

app.post("/posts", (req, res) => {
    const { title, description, author } = req.body;
    if (!title || !description || !author) {
        return res.status(400).send("Todos os campos são obrigatórios: title, description, author");
    }

    try {
        const stmt = db.prepare("INSERT INTO posts (title, description, author) VALUES (?, ?, ?)");
        stmt.run(title, description, author);
        res.status(201).send("Post adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar post:", error.message);
        res.status(500).send("Erro ao adicionar post");
    }
});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    try {
        const post = db.prepare("SELECT * FROM posts WHERE id = ?").get(id);
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

app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, author } = req.body;
    if (!title || !description || !author) {
        return res.status(400).send("Todos os campos são obrigatórios: title, description, author");
    }

    try {
        const stmt = db.prepare("UPDATE posts SET title = ?, description = ?, author = ? WHERE id = ?");
        const result = stmt.run(title, description, author, id);
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

app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    try {
        const stmt = db.prepare("DELETE FROM posts WHERE id = ?");
        const result = stmt.run(id);
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

export default app;