import db from "../database.js";

db.exec(`
  CREATE TABLE IF NOT EXISTS brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
  )
`);

export const getAllBrands = () => {
  return db.prepare("SELECT * FROM brands").all();
};

export const getBrandById = (id) => {
  return db.prepare("SELECT * FROM brands WHERE id = ?").get(id);
};

export const createBrand = (name) => {
  return db.prepare("INSERT INTO brands (name) VALUES (?)").run(name);
};

export const updateBrand = (id, name) => {
  const result = db.prepare("UPDATE brands SET name = ? WHERE id = ?").run(name, id);
  return result.changes > 0;
};

export const removeBrand = (id) => {
  const result = db.prepare("DELETE FROM brands WHERE id = ?").run(id);
  return result.changes > 0;
};
