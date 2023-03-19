import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './HeaderNav.css';

function HeaderNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="py-2">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
