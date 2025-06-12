import React, { useState } from "react";

function CarSearchForm({ onSearch }) {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input name="make" placeholder="Marca" value={filters.make} onChange={handleChange} />
        <input name="model" placeholder="Modelo" value={filters.model} onChange={handleChange} />
        <input name="year" placeholder="Ano" value={filters.year} onChange={handleChange} type="number" min="1900" />
        <input name="color" placeholder="Cor" value={filters.color} onChange={handleChange} />
        <input name="minPrice" placeholder="Preço mín." value={filters.minPrice} onChange={handleChange} type="number" min="0" />
        <input name="maxPrice" placeholder="Preço máx." value={filters.maxPrice} onChange={handleChange} type="number" min="0" />
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
}

export default CarSearchForm;
