import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AnimalListPage = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/animals");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setAnimals(data);
      } catch (e) {
        setError(String(e));
      }
    })();
  }, []);

  return (
    <div>
      <h1>Available for adoption</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Born</th>
            <th>Description</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.name}</td>
              <td>{animal.born}</td>
              <td>{animal.description}</td>
              <td>
                <img src={animal.imageUrl} alt={animal.name} width="150" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AnimalListPage;
