import { getAll, getById, create, update, remove } from "../models/posts.model.js";

export const getAllPosts = (req, res) => {
    try {
        const posts = getAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar posts" });
    }
};

export const getPostById = (req, res) => {
    const { id } = req.params;
    try {
        const post = getById(id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ error: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar post" });
    }
};

export const createPost = (req, res) => {
    const { title, description, author } = req.body;
    if (!title || !description || !author) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        create({ title, description, author });
        res.status(201).json({ message: "Post criado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar post" });
    }
};

export const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        const updated = update(id, { title, description, author });
        if (updated) {
            res.status(200).json({ message: "Post atualizado com sucesso" });
        } else {
            res.status(404).json({ error: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar post" });
    }
};

export const deletePost = (req, res) => {
    const { id } = req.params;
    try {
        const deleted = remove(id);
        if (deleted) {
            res.status(200).json({ message: "Post excluído com sucesso" });
        } else {
            res.status(404).json({ error: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir post" });
    }
};