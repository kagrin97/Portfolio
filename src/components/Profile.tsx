import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { FaBlog, FaGithub } from 'react-icons/fa';

import './Profile.css';

function Profile() {
  return (
    <Card className="mt-5">
      <Card.Header>
        <Image src="/imgs/아바타.jpg" className="Image" />
      </Card.Header>
      <Card.Body className="">
        <Card.Title className="mt-1">강민규</Card.Title>
        <Card.Text className="my-2">
          저는 React와 Next.js를 좋아하는 프론트엔드 개발자입니다.
        </Card.Text>
        <Card.Text className="">kagrin97@gmail.com</Card.Text>
        <Button variant="primary" href="https://myblog.com">
          <FaBlog /> Visit my blog
        </Button>
        <Button variant="secondary" target="_blank" href="https://github.com/kagrin97">
          <FaGithub /> View my GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
