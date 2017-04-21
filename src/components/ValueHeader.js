import React from 'react';
import styled from 'styled-components';

const ValueTitle = styled.h3``;

const ValueHeaderWrapper = styled.div`
  text-align: center;
`;

const ValueHeader = ({
  title,
  icon,
  experiance,
}) => (
  <ValueHeaderWrapper>
    <ValueTitle>{title}</ValueTitle>
    <i className={`fa fa-3x fa-${icon}`} />
    <div>{`${experiance} years`}</div>
  </ValueHeaderWrapper>
);

export default ValueHeader;
