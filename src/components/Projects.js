import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

import Project from './Project';
import Seperator from './Seperator';

const ProjectsTitle = styled.div`
  text-align: center;
`;

const Projects  = ({
  projects,
}) => (
  <div>
    <ProjectsTitle>
      <h5>Projects</h5>
      <Seperator  />
    </ProjectsTitle>

    {
      projects.map(
        (project, index) =>
        <Col md={6} key={project.title}>
          <Project {...project} />
          <Seperator  />
        </Col>
      )
    }
  </div>
)

export default Projects;
