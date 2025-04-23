// Importa funções do model de posts (operações com dados)
import { getAll, getById, create, update, remove } from "../models/posts.model.js";

// Controlador para buscar todos os posts
export const getAllPosts = (req, res) => {
    try {
        const posts = getAll(); // Busca todos os posts do "banco"
        res.status(200).json(posts); // Retorna com sucesso
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar posts" }); // Erro interno
    }
};

// Controlador para buscar um post pelo ID
export const getPostById = (req, res) => {
    const { id } = req.params;
    try {
        const post = getById(id); // Busca post específico
        if (post) {
            res.status(200).json(post); // Se encontrado, retorna
        } else {
            res.status(404).json({ error: "Post não encontrado" }); // Caso contrário, erro 404
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar post" });
    }
};

// Controlador para criar um novo post
export const createPost = (req, res) => {
    const { title, description, author } = req.body;

    // Verifica se todos os campos obrigatórios foram enviados
    if (!title || !description || !author) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        create({ title, description, author }); // Cria o post
        res.status(201).json({ message: "Post criado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar post" });
    }
};

// Controlador para atualizar um post existente
export const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        const updated = update(id, { title, description, author }); // Atualiza o post
        if (updated) {
            res.status(200).json({ message: "Post atualizado com sucesso" });
        } else {
            res.status(404).json({ error: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar post" });
    }
};

// Controlador para excluir um post
export const deletePost = (req, res) => {
    const { id } = req.params;
    try {
        const deleted = remove(id); // Remove o post
        if (deleted) {
            res.status(200).json({ message: "Post excluído com sucesso" });
        } else {
            res.status(404).json({ error: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir post" });
    }
};
