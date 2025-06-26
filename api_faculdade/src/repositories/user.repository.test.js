import { createUser, findUserByUsername, findUserById } from "../repositories/user.repository.js";
import bcrypt from "bcrypt";

describe("User Repository", () => {
  let userId;
  const username = "usuario_teste";
  const password = "senha123";

  it("deve criar um usuário", async () => {
    const hash = await bcrypt.hash(password, 10);
    const user = createUser(username, hash);
    expect(user.id).toBeDefined();
    userId = user.id;
  });

  it("deve buscar usuário por username", () => {
    const user = findUserByUsername(username);
    expect(user).toBeDefined();
    expect(user.username).toBe(username);
  });

  it("deve buscar usuário por id", () => {
    const user = findUserById(userId);
    expect(user).toBeDefined();
    expect(user.username).toBe(username);
  });
});
