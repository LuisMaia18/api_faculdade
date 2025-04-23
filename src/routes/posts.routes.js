// Importa o Express e os controladores de post
import express from "express";
import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} from "../controllers/posts.controller.js";

// Cria o roteador para lidar com as rotas de posts
const router = express.Router();

// Define as rotas da API
router.get("/", getAllPosts);        // GET / - lista todos os posts
router.get("/:id", getPostById);     // GET /:id - retorna um post específico
router.post("/", createPost);        // POST / - cria um novo post
router.put("/:id", updatePost);      // PUT /:id - atualiza um post existente
router.delete("/:id", deletePost);   // DELETE /:id - remove um post

// Exporta o roteador para ser usado na aplicação principal
export default router;
