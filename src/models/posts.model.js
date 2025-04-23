// Importa a conexão com o banco de dados
import db from "../database.js";

// Retorna todos os posts da tabela
export const getAll = () => {
    return db.prepare("SELECT * FROM posts").all();
};

// Retorna um post específico pelo ID
export const getById = (id) => {
    return db.prepare("SELECT * FROM posts WHERE id = ?").get(id);
};

// Cria um novo post com os dados fornecidos
export const create = ({ title, description, author }) => {
    return db.prepare("INSERT INTO posts (title, description, author) VALUES (?, ?, ?)")
        .run(title, description, author);
};

// Atualiza um post existente com base no ID
export const update = (id, { title, description, author }) => {
    const result = db.prepare("UPDATE posts SET title = ?, description = ?, author = ? WHERE id = ?")
        .run(title, description, author, id);
    return result.changes > 0; // Retorna true se a atualização foi feita
};

// Remove um post com base no ID
export const remove = (id) => {
    const result = db.prepare("DELETE FROM posts WHERE id = ?").run(id);
    return result.changes > 0; // Retorna true se o post foi deletado
};
