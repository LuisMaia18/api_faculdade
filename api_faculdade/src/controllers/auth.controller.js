import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByUsername } from "../repositories/user.repository.js";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Usuário e senha são obrigatórios." });
  }
  const existingUser = findUserByUsername(username);
  if (existingUser) {
    return res.status(409).json({ message: "Usuário já existe." });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser(username, passwordHash);
  res.status(201).json({ id: user.id, username: user.username });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Usuário e senha são obrigatórios." });
  }
  const user = findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ message: "Usuário ou senha inválidos." });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Usuário ou senha inválidos." });
  }
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
