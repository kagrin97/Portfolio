import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';

import './HeaderNav.css';

function HeaderNav() {
  const path = useLocation().pathname;
  console.info(path);
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="py-2">
        <Nav className="me-auto">
          <Nav.Link href="/" className={path === '/' ? 'active-url' : ''}>
            Home
          </Nav.Link>
          <Nav.Link href="/portfolio" className={path === '/portfolio' ? 'active-url' : ''}>
            Portfolio
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
