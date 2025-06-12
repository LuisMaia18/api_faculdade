import React from "react";

function CarList({ cars }) {
  if (!cars.length) return <p>Nenhum carro encontrado.</p>;
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Cor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>R$ {Number(car.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CarList;
