import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import Section from './Section';
import ValueHeader from './ValueHeader';
import ValueIcon from '../styled/ValueIcon';
import ValueExpertice from './ValueExpertice';
import Projects from './Projects';

import projects from '../data/projects.json';
import offer from '../data/offer.json';

const ArrowIconDown = () => (
  <ValueIcon>
    <i className="fa fa-3x fa-angle-double-down"></i>
  </ValueIcon>
);

const Main = () => (
  <Section>
    <Grid>
      <Row>
        {
          offer.map(item => (
            <Col key={item.title} md={4}>
              <ValueHeader
                title={item.title}
                icon={item.icon}
                experiance={item.experiance}
              />

              <ArrowIconDown />

              <ValueExpertice
                expertice={item.expertice}
              />

              {/* <ArrowIconDown /> */}

              {/* <Projects projects={[
                projects.blitzbringer,
                projects.faktoora
              ]} /> */}
            </Col>

          ))
        }
      </Row>

      <Row>
        <Projects projects={[
          projects.blitzbringer,
          projects.faktoora,
        ]} />
      </Row>
    </Grid>
  </Section>
);

export default Main;
