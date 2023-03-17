import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './HeaderNav.css';

function HeaderNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="py-2">
        <Navbar.Brand href="/" className="Navbar-Brand">
          MINGYU_KANG
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="Nav-Link">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="Nav-Link">
            About
          </Nav.Link>
          <Nav.Link href="/portfolio" className="Nav-Link">
            Portfolio
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
