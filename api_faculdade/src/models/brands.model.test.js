import { getAllBrands, getBrandById, createBrand, updateBrand, removeBrand } from "../models/brands.model.js";

describe("Brands Model", () => {
  let createdId;

  it("deve criar uma marca", () => {
    const result = createBrand("Marca Teste");
    expect(result.lastInsertRowid).toBeDefined();
    createdId = result.lastInsertRowid;
  });

  it("deve buscar todas as marcas", () => {
    const brands = getAllBrands();
    expect(Array.isArray(brands)).toBe(true);
    expect(brands.length).toBeGreaterThan(0);
  });

  it("deve buscar uma marca pelo id", () => {
    const brand = getBrandById(createdId);
    expect(brand).toBeDefined();
    expect(brand.name).toBe("Marca Teste");
  });

  it("deve atualizar uma marca", () => {
    const updated = updateBrand(createdId, "Marca Editada");
    expect(updated).toBe(true);
    const brand = getBrandById(createdId);
    expect(brand.name).toBe("Marca Editada");
  });

  it("deve remover uma marca", () => {
    const deleted = removeBrand(createdId);
    expect(deleted).toBe(true);
    const brand = getBrandById(createdId);
    expect(brand).toBeUndefined();
  });
});
