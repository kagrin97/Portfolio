import React from 'react';

import './PortfolioItem.css';

import { Portfolio } from '../data/info';

interface Props {
  portfolio: Portfolio;
}

function PortfolioItem({ portfolio }: Props) {
  return (
    <React.Fragment>
      <h1 className="display-3">{portfolio.title}</h1>
      <p className="lead">{portfolio.description}</p>
      <div>
        <img alt="project" src={portfolio.image} width="100%" />
      </div>
      <div>
        <div className="mb-2">
          {portfolio.live ? (
            <a href={portfolio.live} rel="noreferrer" target="_blank">
              <i className="fas fa-link"></i> LIVE URL
            </a>
          ) : (
            'Not Deploy'
          )}
          <a href={portfolio.gitHub} rel="noreferrer" target="_blank" className="ml-4">
            <i className="fa fa-github"></i> GITHUB URL
          </a>
        </div>
        <p>
          {portfolio.data.start} | {portfolio.data.end}
        </p>
        <div className="list-group-item list-group-item-action flex-column align-items-start active">
          <h5 className="ml-5">STACKS</h5>
          {portfolio.stack.map((stack, index) => (
            <p key={index} className="mb-1">
              {stack}
            </p>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioItem;
