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