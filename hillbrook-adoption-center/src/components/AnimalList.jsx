import React from 'react';
import { Table } from 'react-bootstrap';



const AnimalList= () => {
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
                {animals.map(animal => (
                    <tr key={animal.Id}>
                        <td>{animal.Id}</td>
                        <td>{animal.Name}</td>
                        <td>{animal.Born}</td>
                        <td>{animal.Description}</td>
                        <td><img src={animal.ImageUrl} alt={animal.Name} width="150" /></td>
                    </tr>
                ))}
            </tbody>
            </Table>
}

export default AnimalList;