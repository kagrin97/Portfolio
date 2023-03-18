import React from 'react';
import Table from 'react-bootstrap/Table';

import './Skills.css';

import { info } from '../data/info';

const tableTheme = [
  'table-active',
  'table-primary',
  'table-success',
  'table-danger',
  'table-warning',
  'table-info',
  'table-light',
  'table-dark',
];

function Skills() {
  return (
    <Table responsive striped bordered hover variant="primary" className="mt-5 table table-hover">
      <thead>
        <tr className="">
          <th scope="col">Category</th>
          <th scope="col">Name</th>
          <th scope="col">Level</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(info.skills).map((category, index) => (
          <tr key={category} className={tableTheme[index]}>
            <th scope="row">{category}</th>
            <td>
              {info.skills[category].map((skillInfo: string[], itemIndex: number) => (
                <p key={itemIndex}>{skillInfo[0]}</p>
              ))}
            </td>
            <td>
              {info.skills[category].map((skillInfo: string[], itemIndex: number) => (
                <p key={itemIndex}>{skillInfo[1]}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Skills;
