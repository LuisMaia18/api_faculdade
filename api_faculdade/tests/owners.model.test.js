import { getAllOwners, createOwner, getOwnerById, removeOwner } from "../src/models/entities.model.js";

describe("Owners Model", () => {
  let ownerId;

  it("deve criar um proprietário", () => {
    const result = createOwner({ name: "João", email: "joao@email.com", phone: "11999999999" });
    expect(result.changes).toBe(1);
    ownerId = result.lastInsertRowid;
  });

  it("deve buscar todos os proprietários", () => {
    const owners = getAllOwners();
    expect(Array.isArray(owners)).toBe(true);
    expect(owners.length).toBeGreaterThan(0);
  });

  it("deve buscar um proprietário pelo id", () => {
    const owner = getOwnerById(ownerId);
    expect(owner).toBeDefined();
    expect(owner.name).toBe("João");
  });

  it("deve remover um proprietário", () => {
    const removed = removeOwner(ownerId);
    expect(removed).toBe(true);
  });
});
