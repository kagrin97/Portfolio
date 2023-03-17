import React from 'react';
import Table from 'react-bootstrap/Table';

function Skills() {
  return (
    <Table striped bordered hover variant="primary" className="mt-5">
      <thead>
        <tr>
          <th>Skills</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>React</td>
          <td>A JavaScript library for building user interfaces</td>
        </tr>
        <tr>
          <td>Next</td>
          <td>A React framework for production</td>
        </tr>
        <tr>
          <td>Next</td>
          <td>A React framework for production</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default Skills;
