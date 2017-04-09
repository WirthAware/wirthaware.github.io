import React from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import styled from 'styled-components';

import Section from './Section';

const ValueList = styled.ul`
`;
const ValueListItem = styled.li`
`;

const ValueProporsition = () => (
  <Section primary>
    <Grid>
      <h3>Value Proporsition</h3>
      <Row>
        <Col md={4}>
          <Well>
            <h5>Team Enabling</h5>
            <div>
              dsajdaskdjhsakjhdk
            </div>
          </Well>
        </Col>
        <Col md={4}>
          <Well>
            <h5>Team Efficience</h5>
            <ValueList>
              <ValueListItem>SCRUM</ValueListItem>
              <ValueListItem>Kanban</ValueListItem>
              <ValueListItem>Mentoring</ValueListItem>
              <ValueListItem>LEAN</ValueListItem>
              <ValueListItem>Agile</ValueListItem>
              <ValueListItem>Lean Startup</ValueListItem>
            </ValueList>

          </Well>
        </Col>
        <Col md={4}>
          <Well>
            <h5>Resource</h5>
            <div>

            </div>
          </Well>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default ValueProporsition ;
