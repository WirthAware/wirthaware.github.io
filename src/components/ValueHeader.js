import React from 'react';
import styled from 'styled-components';

import CenteredText from '../styled/CenteredText';

const ValueTitle = styled.h3``;

const ValueHeader = ({
  title,
  icon,
  experiance,
}) => (
  <CenteredText>
    <ValueTitle>{title}</ValueTitle>
    <i className={`fa fa-3x fa-${icon}`} />
    <div>{`${experiance} years`}</div>
  </CenteredText>
);

export default ValueHeader;
