import React from 'react';
import styled from 'styled-components';

import { media } from '../styled/util';

const Avatar = styled.img`
  height: 100vh;
  ${media.phone`height: 50vh;`}
  text-align: center;
  left: 50%;
`;

export default Avatar;
