import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  removeBrand
} from "../models/brands.model.js";

export const listBrands = (req, res) => {
  res.json(getAllBrands());
};

export const getBrand = (req, res) => {
  const brand = getBrandById(req.params.id);
  if (!brand) return res.status(404).json({ message: "Marca não encontrada." });
  res.json(brand);
};

export const addBrand = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Nome é obrigatório." });
  try {
    const result = createBrand(name);
    res.status(201).json({ id: result.lastInsertRowid, name });
  } catch (e) {
    res.status(409).json({ message: "Marca já existe." });
  }
};

export const editBrand = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Nome é obrigatório." });
  const updated = updateBrand(req.params.id, name);
  if (!updated) return res.status(404).json({ message: "Marca não encontrada." });
  res.json({ id: req.params.id, name });
};

export const deleteBrand = (req, res) => {
  const deleted = removeBrand(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Marca não encontrada." });
  res.status(204).send();
};
