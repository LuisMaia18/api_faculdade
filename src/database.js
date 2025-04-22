import Database from "better-sqlite3";

const db = new Database("database.db");

// Cria a tabela de posts se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    author TEXT NOT NULL
  )
`);

export default db;