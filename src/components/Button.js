import React from 'react';
import styled from 'styled-components';

const primary = 'mediumseagreen';
const secondary = 'palevioletred';

const Button = styled.button`
  background: ${props => props.primary ? 'mediumseagreen' : 'white'};
  color: ${props => props.primary ? 'white' : 'mediumseagreen'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid mediumseagreen;
  border-radius: 3px;
`;

export default Button;
