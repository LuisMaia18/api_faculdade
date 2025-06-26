import db from "../database.js";

// --- OWNERS ---
export const getAllOwners = () => db.prepare("SELECT * FROM owners").all();
export const getOwnerById = (id) => db.prepare("SELECT * FROM owners WHERE id = ?").get(id);
export const createOwner = ({ name, email, phone }) => db.prepare("INSERT INTO owners (name, email, phone) VALUES (?, ?, ?)").run(name, email, phone);
export const updateOwner = (id, { name, email, phone }) => db.prepare("UPDATE owners SET name = ?, email = ?, phone = ? WHERE id = ?").run(name, email, phone, id).changes > 0;
export const removeOwner = (id) => db.prepare("DELETE FROM owners WHERE id = ?").run(id).changes > 0;

// --- BRANDS ---
export const getAllBrands = () => db.prepare("SELECT * FROM brands").all();
export const getBrandById = (id) => db.prepare("SELECT * FROM brands WHERE id = ?").get(id);
export const createBrand = ({ name, country }) => db.prepare("INSERT INTO brands (name, country) VALUES (?, ?)").run(name, country);
export const updateBrand = (id, { name, country }) => db.prepare("UPDATE brands SET name = ?, country = ? WHERE id = ?").run(name, country, id).changes > 0;
export const removeBrand = (id) => db.prepare("DELETE FROM brands WHERE id = ?").run(id).changes > 0;

// --- SERVICES ---
export const getAllServices = () => db.prepare("SELECT * FROM services").all();
export const getServiceById = (id) => db.prepare("SELECT * FROM services WHERE id = ?").get(id);
export const createService = ({ car_id, description, date, cost }) => db.prepare("INSERT INTO services (car_id, description, date, cost) VALUES (?, ?, ?, ?)").run(car_id, description, date, cost);
export const updateService = (id, { car_id, description, date, cost }) => db.prepare("UPDATE services SET car_id = ?, description = ?, date = ?, cost = ? WHERE id = ?").run(car_id, description, date, cost, id).changes > 0;
export const removeService = (id) => db.prepare("DELETE FROM services WHERE id = ?").run(id).changes > 0;
