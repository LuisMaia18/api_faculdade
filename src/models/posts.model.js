import db from "../database.js";

export const getAll = () => {
    return db.prepare("SELECT * FROM posts").all();
};

export const getById = (id) => {
    return db.prepare("SELECT * FROM posts WHERE id = ?").get(id);
};

export const create = ({ title, description, author }) => {
    return db.prepare("INSERT INTO posts (title, description, author) VALUES (?, ?, ?)")
        .run(title, description, author);
};

export const update = (id, { title, description, author }) => {
    const result = db.prepare("UPDATE posts SET title = ?, description = ?, author = ? WHERE id = ?")
        .run(title, description, author, id);
    return result.changes > 0;
};

export const remove = (id) => {
    const result = db.prepare("DELETE FROM posts WHERE id = ?").run(id);
    return result.changes > 0;
};