import  React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

import Section from './Section';
import Container from './Container';

const Title = styled.div`
  text-align: center;
  color: red;
`;

const Main = () => (
  <Section>
  <Grid>
    <Row>
      <Col>
        <Title>
          <h1>
            What i do ...
          </h1>
        </Title>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <div>
          <i className="fa fa-5x fa-terminal" aria-hidden="true" />
        </div>
        <div>
          Web-Developer
        </div>
      </Col>
      <Col md={4}>
      <div>
        <i className="fa fa-5x fa-database" aria-hidden="true" />
      </div>
        <div>
          Backend-Developer
        </div>
      </Col>
      <Col md={4}>
        <div>
          <i className="fa fa-5x fa-mobile" aria-hidden="true" />
        </div>
        <div>
          Mobile-Developer
        </div>
      </Col>
    </Row>
  </Grid>
  </Section>
);

export default Main;
