import { getAllCars, getCarById, createCar, updateCar, removeCar, searchCars } from "../models/cars.model.js";

describe("Cars Model", () => {
  let carId;

  it("deve criar um carro", () => {
    const result = createCar({ make: "MarcaTest", model: "ModeloTest", year: 2020, color: "Azul", price: 50000 });
    expect(result.lastInsertRowid).toBeDefined();
    carId = result.lastInsertRowid;
  });

  it("deve buscar todos os carros", () => {
    const cars = getAllCars();
    expect(Array.isArray(cars)).toBe(true);
    expect(cars.length).toBeGreaterThan(0);
  });

  it("deve buscar um carro pelo id", () => {
    const car = getCarById(carId);
    expect(car).toBeDefined();
    expect(car.make).toBe("MarcaTest");
  });

  it("deve atualizar um carro", () => {
    const updated = updateCar(carId, { make: "MarcaEditada", model: "ModeloEditado", year: 2021, color: "Vermelho", price: 60000 });
    expect(updated).toBe(true);
    const car = getCarById(carId);
    expect(car.make).toBe("MarcaEditada");
  });

  it("deve buscar carros por filtro", () => {
    const cars = searchCars({ make: "MarcaEditada" });
    expect(Array.isArray(cars)).toBe(true);
    expect(cars.length).toBeGreaterThan(0);
  });

  it("deve remover um carro", () => {
    const deleted = removeCar(carId);
    expect(deleted).toBe(true);
    const car = getCarById(carId);
    expect(car).toBeUndefined();
  });
});
