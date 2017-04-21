import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Button from './Button';
import CoverText from './CoverText';
import Avatar from './Avatar';

import me from '../images/me.svg';

const Name = styled.h1`
  font-family: Indie Flower;
`;

const Cover = () => (
  <Grid>
    <Row>
      <Col md={4}>
        <CoverText>Hello, my name is</CoverText>
        <Name>Stephan  Wirth</Name>
        <CoverText>
          {`I'm Full-Stack Cross-Platform Developer`}
        </CoverText>
        <CoverText>{'located in Germany'}</CoverText>
        <Button primary>Hire me!</Button>
      </Col>
      <Col md={8}>
        <Avatar src={me} />
      </Col>
    </Row>
  </Grid>
)
export default Cover;
