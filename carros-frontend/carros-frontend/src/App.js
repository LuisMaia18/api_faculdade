import React, { useState } from "react";
import CarSearchForm from "./CarSearchForm";
import CarList from "./CarList";
import './App.css';

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
    <div style={{ minHeight: '100vh', background: '#eaf1f8', padding: 0 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: '32px 0' }}>
        <h1 style={{ textAlign: 'center', color: '#2a3b4c', fontSize: 38, marginBottom: 18, fontWeight: 800, letterSpacing: 1 }}>Busca de Carros</h1>
        <CarSearchForm onSearch={handleSearch} />
        {loading && <p style={{textAlign: 'center'}}>Carregando...</p>}
        {error && <p style={{ color: "#c00", textAlign: 'center', fontWeight: 600 }}>{error}</p>}
        <CarList cars={cars} />
      </div>
    </div>
  );
}

export default App;
