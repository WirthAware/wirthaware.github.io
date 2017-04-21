import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import Section from './Section';

import blitzbringerImage from '../images/blitzbringer_order.PNG';

const ProjectHeadline = styled.h4`
  color: tomato;
`;
const ProjectDescription = styled.div`
  padding: 1em;
  font-size: 20px;
`;
const ProjectCol = styled(Col)`
  background-color: ${props => props.primary ? 'papayawhip' : 'white'} ;
`;
const ProjectImage = styled.img`
  padding: 1em;
  width: 100%;
`;

const Projects = () => (
  <Section primary>
    <Grid>
      <h3>latest Projects</h3>

      <Row>
        <ProjectCol md={12}>
          <Row>
            <Col md={8}>
              <ProjectHeadline>Blitzbringer App</ProjectHeadline>
              <ProjectDescription>
                {`
                  Unterstützung bei der Entwicklung der instant local delivery App für Sofortlieferungen egal wann und egal wohin.
                `}
              </ProjectDescription>

              <Seperator />

              <ul>
                <li>same day delivery</li>
                <li>Ionic</li>
                <li>AngularJS</li>
                <li>nodejs</li>
                <li>NoSQL/ MongoDB</li>
                <li>Android</li>
                <li>RxJS</li>
                <li>Lean Startup</li>
                <li>AWS (DynamoDB, Docker)</li>
              </ul>
            </Col>
            <Col md={4}>
              <ProjectImage src={blitzbringerImage} />
            </Col>
          </Row>
        </ProjectCol>
      </Row>

      <Row>
        <ProjectCol primary md={6}>
          <Row>
            <Col md={12}>
              <ProjectHeadline></ProjectHeadline>
              <ProjectDescription>
                {`
                  Für ein FinTech aufbau einer Componentenbasierenden mobile-First responsive Web-Application.
                `}
              </ProjectDescription>

              <Seperator />

              <ul>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Docker</li>
                <li>nodejs</li>
                <li>Redis</li>
                <li>Bootstrap v4</li>
                <li>Ranger</li>
                <li>GitLab</li>
                <li>CI, CD</li>
              </ul>
            </Col>
          </Row>
        </ProjectCol>
      </Row>

    </Grid>
  </Section>
)

export default Projects ;
