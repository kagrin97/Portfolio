import React from 'react';

import './Portfolio.css';

import PortfolioItem from '../components/PortfolioItem';

import { info } from '../data/info';

function Portfolio() {
  return (
    <React.Fragment>
      <div className="parent mt-5 ">
        {info.portfolio.map((portfolio, index) => {
          return (
            <div key={index} className="child">
              <div className="jumbotron">
                <PortfolioItem portfolio={portfolio} />
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
