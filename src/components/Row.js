import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }

`;

export default Row;
