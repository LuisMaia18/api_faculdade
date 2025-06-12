import { getAllCars, getCarById, createCar, updateCar, removeCar, searchCars } from "../models/cars.model.js";

export const getAllCarsController = (req, res) => {
    try {
        const cars = getAllCars();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar carros" });
    }
};

export const getCarByIdController = (req, res) => {
    const { id } = req.params;
    try {
        const car = getCarById(id);
        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({ error: "Carro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar carro" });
    }
};

export const createCarController = (req, res) => {
    const { make, model, year, color, price } = req.body;

    if (!make || !model || !year || !color || !price) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        createCar({ make, model, year, color, price });
        res.status(201).json({ message: "Carro criado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar carro" });
    }
};

export const updateCarController = (req, res) => {
    const { id } = req.params;
    const { make, model, year, color, price } = req.body;

    if (!make || !model || !year || !color || !price) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        const updated = updateCar(id, { make, model, year, color, price });
        if (updated) {
            res.status(200).json({ message: "Carro atualizado com sucesso" });
        } else {
            res.status(404).json({ error: "Carro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar carro" });
    }
};

export const deleteCarController = (req, res) => {
    const { id } = req.params;
    try {
        const deleted = removeCar(id);
        if (deleted) {
            res.status(200).json({ message: "Carro excluído com sucesso" });
        } else {
            res.status(404).json({ error: "Carro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir carro" });
    }
};

export const searchCarsController = (req, res) => {
    try {
        const filters = req.query;
        const cars = searchCars(filters);
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar carros com filtros" });
    }
};