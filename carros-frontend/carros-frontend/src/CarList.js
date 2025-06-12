import React from "react";

// Função utilitária para buscar imagem do Unsplash
function getCarImageUrl({ make, model, color }) {
  // Monta uma query para Unsplash
  const query = `${make} ${model} ${color} car`;
  // Usa a API de imagens do Unsplash (sem autenticação, retorna imagem aleatória)
  return `https://source.unsplash.com/400x200/?${encodeURIComponent(query)}`;
}

function CarList({ cars }) {
  if (!cars.length) return <p style={{ textAlign: "center" }}>Nenhum carro encontrado.</p>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center",
        marginTop: 32,
      }}
    >
      {cars.map((car) => (
        <div
          key={car.id}
          style={{
            background: "#f7fafd",
            borderRadius: 12,
            boxShadow: "0 2px 8px #0001",
            width: 320,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={getCarImageUrl(car)}
            alt={`${car.make} ${car.model}`}
            style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              borderRadius: 8,
              marginBottom: 12,
            }}
            onError={(e) => (e.target.src = "/default-car.jpg")}
          />
          <h2
            style={{
              margin: "8px 0 4px 0",
              fontSize: 22,
              color: "#2a3b4c",
            }}
          >
            {car.make} {car.model}
          </h2>
          <div
            style={{
              fontSize: 16,
              color: "#4a5a6a",
              marginBottom: 4,
            }}
          >
            Ano: <b>{car.year}</b> | Cor: <b>{car.color}</b>
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#1a7f5a",
              fontWeight: 600,
            }}
          >
            R$ {Number(car.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarList;
