import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4em;
  background: ${props => props.primary ? '#80D8FF' : '#CCFF90'};
`;

export default Section;
