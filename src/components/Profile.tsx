import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

import { info } from '../data/info';

import './Profile.css';

function Profile() {
  return (
    <Card className="mt-5">
      <Card.Header>
        <Image src="/imgs/아바타.jpg" width="80px" height="80px" className="Image" />
      </Card.Header>
      <Card.Body className="">
        <Card.Title className="mt-2">{info.name}</Card.Title>
        <Card.Text className="my-2">{info.bio}</Card.Text>
        {info.miniBio.map((bio: any, index: number) => {
          return (
            <Card.Text key={index}>
              <i className={bio.icon} aria-hidden="true" /> {bio.text}
            </Card.Text>
          );
        })}

        {info.socials.map((social: any, index: number) => {
          return (
            <Button key={index} href={social.link} target="_blank">
              <i className={social.icon} aria-hidden="true" /> {social.label}
            </Button>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Profile;
