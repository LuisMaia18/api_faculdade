import React, { useState } from "react";
import CarSearchForm from "./CarSearchForm";
import CarList from "./CarList";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (filters) => {
    setLoading(true);
    setError("");
    let query = Object.entries(filters)
      .filter(([_, v]) => v !== "")
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join("&");
    try {
      const res = await fetch(
        `http://localhost:3000/cars/search${query ? `?${query}` : ""}`
      );
      if (!res.ok) throw new Error("Erro ao buscar carros");
      const data = await res.json();
      setCars(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Busca de Carros</h1>
      <CarSearchForm onSearch={handleSearch} />
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <CarList cars={cars} />
    </div>
  );
}

export default App;
