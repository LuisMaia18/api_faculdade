import { getAllServices, createService, getServiceById, removeService } from "../src/models/entities.model.js";

describe("Services Model", () => {
  let serviceId;

  it("deve criar um serviço", () => {
    // Para o teste funcionar, é necessário um carro válido no banco (id=1)
    const result = createService({ car_id: 1, description: "Troca de óleo", date: "2025-06-25", cost: 200 });
    expect(result.changes).toBe(1);
    serviceId = result.lastInsertRowid;
  });

  it("deve buscar todos os serviços", () => {
    const services = getAllServices();
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);
  });

  it("deve buscar um serviço pelo id", () => {
    const service = getServiceById(serviceId);
    expect(service).toBeDefined();
    expect(service.description).toBe("Troca de óleo");
  });

  it("deve remover um serviço", () => {
    const removed = removeService(serviceId);
    expect(removed).toBe(true);
  });
});
