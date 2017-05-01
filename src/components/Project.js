import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Collapse } from 'react-bootstrap';

const ProjectHeadline = styled.h6`
`;

const ProjectDescription = styled.div`
`;
const ProjectShowMore = styled.button`
  text-align: center;
  color: gray;

  &:hover: {
    background-color: green;
  }
`;

const toggle = (prev, props) => ({
  isOpen: !prev.isOpen,
})

class Project extends Component {
  state = {
    isOpen: false,
  }

  render() {
    const {
      title,
      description,
      tags,
    } = this.props;

    return (
      <Col>
        <ProjectHeadline>{title}</ProjectHeadline>
        <ProjectDescription>{description}</ProjectDescription>
        <Collapse in={this.state.isOpen}>
          <ul>
            {
              tags.map(tag => <li key={tag}>{tag}</li>)
            }
          </ul>
        </Collapse>
        <ProjectShowMore >
          <i className="fa fa-2x fa-angle-down" />
        </ProjectShowMore>
      </Col>
    );
  }
}

export default Project;
