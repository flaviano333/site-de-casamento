import React, { useState, useEffect } from 'react';

const ListaPresentes = () => {
  const [presentes, setPresentes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/presentes')
      .then(response => response.json())
      .then(data => setPresentes(data))
      .catch(error => console.error('Erro ao buscar presentes:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Presentes</h1>
      <ul>
        {presentes.map(presente => (
          <li key={presente.id}>
            <img src={presente.imagem} alt={presente.nome} />
            <h2>{presente.nome}</h2>
            <p>{presente.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPresentes;