import { getAllBrands, createBrand, getBrandById, removeBrand } from "../src/models/entities.model.js";

describe("Brands Model", () => {
  let brandId;

  it("deve criar uma marca", () => {
    const result = createBrand({ name: "Toyota", country: "Japão" });
    expect(result.changes).toBe(1);
    brandId = result.lastInsertRowid;
  });

  it("deve buscar todas as marcas", () => {
    const brands = getAllBrands();
    expect(Array.isArray(brands)).toBe(true);
    expect(brands.length).toBeGreaterThan(0);
  });

  it("deve buscar uma marca pelo id", () => {
    const brand = getBrandById(brandId);
    expect(brand).toBeDefined();
    expect(brand.name).toBe("Toyota");
  });

  it("deve remover uma marca", () => {
    const removed = removeBrand(brandId);
    expect(removed).toBe(true);
  });
});
