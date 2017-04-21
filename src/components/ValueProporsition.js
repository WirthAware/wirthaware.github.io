import React from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import styled from 'styled-components';

import Section from './Section';

const ValueList = styled.ul`
`;
const ValueListItem = styled.li`
`;
const ValueHeadline = styled.h5`
`;

const ValueProporsition = () => (
  <Section primary>
    <Grid>
      <h3>What kind of work i do</h3>
      <Row>
        <Col md={4}>
          <Well>
            <ValueHeadline>Team Enabling</ValueHeadline>
            <div>
              Supporting the introduction of new technologies into their team.
            </div>
            <ValueList>
              <ValueListItem>Technology Transfer</ValueListItem>
              <ValueListItem>Pair-Programming</ValueListItem>
              <ValueListItem>Coaching</ValueListItem>
            </ValueList>
          </Well>
        </Col>
        <Col md={4}>
          <Well>
            <h5>Team Efficience</h5>
            <div>
              Support in building high velecity development Teams.
            </div>
            <ValueList>
              <ValueListItem>SCRUM</ValueListItem>
              <ValueListItem>Kanban</ValueListItem>
              <ValueListItem>Mentoring</ValueListItem>
              <ValueListItem>LEAN</ValueListItem>
              <ValueListItem>Agile</ValueListItem>
              <ValueListItem>TDD</ValueListItem>
              <ValueListItem>Lean Startup</ValueListItem>
            </ValueList>

          </Well>
        </Col>
        <Col md={4}>
          <Well>
            <h5>Resource</h5>
            <div>
              As a developer i support your Team to bring your project goals to a success story.
            </div>
          </Well>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default ValueProporsition ;
