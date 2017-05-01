import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Collapse } from 'react-bootstrap';

const ProjectHeadline = styled.h6`
  font-weight: bold;
`;

const ProjectDescription = styled.div`
`;
const ProjectShowMore = styled.div`
  text-align: center;
  color: gray;

  &:hover {
    color: green;
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
        <div>
          <strong>Roles:</strong>
          <div>
            Software-Architect
          </div>
        </div>
        <Collapse in={this.state.isOpen}>
          <ul>
            {
              tags.map(tag => <li key={tag}>{tag}</li>)
            }
          </ul>
        </Collapse>
        <ProjectShowMore onClick={() => this.setState(toggle)}>
          <i className={`fa fa-2x fa-angle-${this.state.isOpen ? 'up' : 'down'}`} />
        </ProjectShowMore>
      </Col>
    );
  }
}

export default Project;
