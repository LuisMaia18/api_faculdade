import { getAllCars, createCar, getCarById, removeCar } from "../src/models/cars.model.js";

describe("Cars Model", () => {
  let carId;

  it("deve criar um carro", () => {
    const result = createCar({ make: "Toyota", model: "Corolla", year: 2020, color: "preto", price: 90000 });
    expect(result.changes).toBe(1);
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
    expect(car.make).toBe("Toyota");
  });

  it("deve remover um carro", () => {
    const removed = removeCar(carId);
    expect(removed).toBe(true);
  });
});
