import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = process.env.JWT_SECRET || "supersecret";

// Função para gerar token JWT
export function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "2h" });
}

// Função para verificar token JWT (middleware Express)
export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token não fornecido" });
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido" });
    req.user = user;
    next();
  });
}

// Função para gerar hash de senha
export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

// Função para comparar senha
export function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
