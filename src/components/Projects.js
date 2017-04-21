import React from 'react';
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
        <div>
          <Project key={project.title} {...project} />
          <Seperator  />
        </div>
      )
    }
  </div>
)

export default Projects;
