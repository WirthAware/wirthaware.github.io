import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import Section from './Section';
import ValueHeader from './ValueHeader';
import ValueIcon from '../styled/ValueIcon';
import ValueExpertice from './ValueExpertice';
import Projects from './Projects';

import projects from '../data/projects.json';

const ArrowIconDown = () => (
  <ValueIcon>
    <i className="fa fa-3x fa-angle-double-down"></i>
  </ValueIcon>
);

const Main = () => (
  <Section>
    <Grid>
      <Row>
        <Col md={4}>
          <ValueHeader
            title="Softwaredeveloper"
            icon="code"
            experiance={10}
          />

          <ArrowIconDown />

          <ValueExpertice
            text="C/C++, .net, WPF, JavaScript, CANbus, Reactive Extensions"
          />

          <ArrowIconDown />

          <Projects projects={[
            projects.blitzbringer,
            projects.faktoora
          ]} />
        </Col>
        <Col md={4}>
          <ValueHeader
            title="Software-Architect"
            icon="cubes"
            experiance={5}
          />

          <ArrowIconDown />

          <ValueExpertice
            text="Coding the Architecture, IoT, Cloud, Enterprise, MVC, MVVM, Event-Driven, DDD, Unidirectional Dataflow"
          />

          <ArrowIconDown />
        </Col>
        <Col md={4}>
          <ValueHeader
            title="Consultant"
            icon="id-badge"
            experiance={3}
          />

          <ArrowIconDown />

          <ValueExpertice
            text="Teamleader Frontend Development"
          />

          <ArrowIconDown />
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Main;
