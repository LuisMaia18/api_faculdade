import db from "../database.js";
import bcrypt from "bcrypt";

// Criação da tabela de usuários
const createUserTable = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);
};

createUserTable();

export const createUser = (username, passwordHash) => {
  const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
  const info = stmt.run(username, passwordHash);
  return { id: info.lastInsertRowid, username };
};

export const findUserByUsername = (username) => {
  const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
  return stmt.get(username);
};

export const findUserById = (id) => {
  const stmt = db.prepare("SELECT * FROM users WHERE id = ?");
  return stmt.get(id);
};
