import db from "../database.js";

export const getAllCars = () => {
    return db.prepare("SELECT * FROM cars").all();
};

export const getCarById = (id) => {
    return db.prepare("SELECT * FROM cars WHERE id = ?").get(id);
};

export const createCar = ({ make, model, year, color, price }) => {
    return db.prepare("INSERT INTO cars (make, model, year, color, price) VALUES (?, ?, ?, ?, ?)")
        .run(make, model, year, color, price);
};

export const updateCar = (id, { make, model, year, color, price }) => {
    const result = db.prepare("UPDATE cars SET make = ?, model = ?, year = ?, color = ?, price = ? WHERE id = ?")
        .run(make, model, year, color, price, id);
    return result.changes > 0;
};

export const removeCar = (id) => {
    const result = db.prepare("DELETE FROM cars WHERE id = ?").run(id);
    return result.changes > 0;
};

export const searchCars = (filters) => {
    let query = "SELECT * FROM cars WHERE 1=1";
    const params = [];

    if (filters.make) {
        query += " AND make LIKE ?";
        params.push(`%${filters.make}%`);
    }
    if (filters.model) {
        query += " AND model LIKE ?";
        params.push(`%${filters.model}%`);
    }
    if (filters.year) {
        query += " AND year = ?";
        params.push(filters.year);
    }
    if (filters.color) {
        query += " AND color LIKE ?";
        params.push(`%${filters.color}%`);
    }
    if (filters.minPrice) {
        query += " AND price >= ?";
        params.push(filters.minPrice);
    }
    if (filters.maxPrice) {
        query += " AND price <= ?";
        params.push(filters.maxPrice);
    }

    return db.prepare(query).all(...params);
};