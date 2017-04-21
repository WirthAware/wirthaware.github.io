import React from 'react';
import styled from 'styled-components';
import { Row, Col, Collapse } from 'react-bootstrap';

const ProjectHeadline = styled.h6`
`;

const ProjectDescription = styled.div`
`;
const ProjectShowMore = styled.div`
  text-align: center;
  color: gray;

  &:hover: {
    color: green;
  }
`;

const Project = ({
  title,
  description,
  tags,
}) => (
    <Col>
      <ProjectHeadline>{title}</ProjectHeadline>
      <ProjectDescription>{description}</ProjectDescription>
      <Collapse in={false}>
        <ul>
          {
            tags.map(tag => <li key={tag}>{tag}</li>)
          }
        </ul>
      </Collapse>
      <ProjectShowMore>
        <i className="fa fa-2x fa-angle-down" />
      </ProjectShowMore>
    </Col>
);

export default Project;
