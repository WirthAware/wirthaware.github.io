import React from 'react';
import styled from 'styled-components';

const SeperatorLine = styled.div`
  height: 1px;
  background: 'mediumseagreen';
  border-bottom: 1px solid mediumseagreen;
`;
const Seperator = () => (
  <div>
    <SeperatorLine />
    <br />
  </div>
);

export default Seperator;
