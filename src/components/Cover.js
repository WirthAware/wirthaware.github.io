import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import styled from 'styled-components';

import Typist from 'react-typist';
import RestartingTypist from './RestartingTypist';

import Button from './Button';
import Container from './Container';
import Section from './Section';
import me from '../stephan.svg';

const Header = styled.div`
  text-align: left;
  display: block;
`;

const Avatar = styled.img`
  height: 100vh;
  text-align: center;
  left: 50%;
`;

const Text = styled.div`
  font-size: 1em;
  color: lightgray;
  font-size: 32px;
`;

const myTitles = [
  'Im',
  'Full-Stack',
  'Cross-Plattform',
  'Developer',
];

const SpeakBox = styled.p`
  position: absolute;
  left: 20%;
  top: 35%;
  padding-top: 50px;
  border: 2px;
  background-color: black;
  width: 150px;
  opacity: 0.5;
  text-align: center;
  color: white;
`;

class Cover extends Component {
  render() {
    return (
      <Grid>
      <div style={{ height: '100vh' }}>
        <Row>
          <Col md={6}>
            <Text>Hello, my name is</Text>
            <h2>Stephan  Wirth</h2>
            <Text>
              {`I'm Full-Stack Cross-Platform Developer`}
              <br/>
              {'located in Germany'}
            </Text>
            <Button primary>Hire me!</Button>
          </Col>
          <Col md={6}>
            <Avatar src={me} />
          </Col>
        </Row>
      </div>
      </Grid>
    );
  }
}

export default Cover;
