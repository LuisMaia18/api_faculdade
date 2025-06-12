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
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#f7fafd",
        borderRadius: 12,
        padding: 16,
        margin: "0 auto 24px auto",
        maxWidth: 700,
        boxShadow: "0 2px 8px #0001",
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        justifyContent: "center",
      }}
    >
      <input
        name="make"
        placeholder="Marca"
        value={filters.make}
        onChange={handleChange}
        style={{
          flex: 1,
          minWidth: 100,
          padding: 8,
          borderRadius: 6,
          border: "1px solid #c3d0e0",
        }}
      />
      <input
        name="model"
        placeholder="Modelo"
        value={filters.model}
        onChange={handleChange}
        style={{
          flex: 1,
          minWidth: 100,
          padding: 8,
          borderRadius: 6,
          border: "1px solid #c3d0e0",
        }}
      />
      <input
        name="year"
        placeholder="Ano"
        value={filters.year}
        onChange={handleChange}
        type="number"
        min="1900"
        style={{
          flex: 1,
          minWidth: 80,
          padding: 8,
          borderRadius: 6,
          border: "1px solid #c3d0e0",
        }}
      />
      <input
        name="color"
        placeholder="Cor"
        value={filters.color}
        onChange={handleChange}
        style={{
          flex: 1,
          minWidth: 80,
          padding: 8,
          borderRadius: 6,
          border: "1px solid #c3d0e0",
        }}
      />
      <input
        name="minPrice"
        placeholder="Preço mín."
        value={filters.minPrice}
        onChange={handleChange}
        type="number"
        min="0"
        style={{
          flex: 1,
          minWidth: 80,
          padding: 8,
          borderRadius: 6,
          border: "1px solid #c3d0e0",
        }}
      />
      <input
        name="maxPrice"
        placeholder="Preço máx."
        value={filters.maxPrice}
        onChange={handleChange}
        type="number"
        min="0"
        style={{
          flex: 1,
          minWidth: 80,
          padding: 8,
          borderRadius: 6,
          border: "1px solid #c3d0e0",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 24px",
          borderRadius: 6,
          background: "#2a3b4c",
          color: "#fff",
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Buscar
      </button>
    </form>
  );
}

export default CarSearchForm;
