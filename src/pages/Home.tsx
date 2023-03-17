import React from 'react';
import { Container } from 'react-bootstrap';

import Profile from '../components/Profile';
import Skills from '../components/Skills';

function Home() {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <h1>WELCOME!! FRONTEND_DEVELOPER_KMG_2.7</h1>
        <Profile />
        <Skills />
      </Container>
    </React.Fragment>
  );
}

export default Home;
