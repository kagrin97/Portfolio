import React from 'react';
import Table from 'react-bootstrap/Table';

import './Skills.css';

import { info, Info } from '../data/info';

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
          <th scope="col">Skill</th>
          <th scope="col">Name</th>
          <th scope="col">Step</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(info.skills).map((category, index) => (
          <tr key={category} className={tableTheme[index]}>
            <th scope="row">{category}</th>
            <td>
              {info.skills[category].map((items: any) => (
                <p>{items[0]}</p>
              ))}
            </td>
            <td>
              {info.skills[category].map((items: any) => (
                <p>{items[1]}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Skills;
