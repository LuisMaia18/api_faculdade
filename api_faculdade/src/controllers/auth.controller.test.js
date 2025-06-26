import request from "supertest";
import app from "../src/app.js";

describe("Auth API", () => {
  let token;
  const username = "apiuser";
  const password = "apipass";

  it("deve registrar um usuário", async () => {
    const res = await request(app).post("/auth/register").send({ username, password });
    expect([200, 201, 409]).toContain(res.statusCode); // 409 se já existir
  });

  it("deve fazer login e receber token", async () => {
    const res = await request(app).post("/auth/login").send({ username, password });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  it("deve negar login com senha errada", async () => {
    const res = await request(app).post("/auth/login").send({ username, password: "errada" });
    expect(res.statusCode).toBe(401);
  });
});
