import styled, { css } from 'styled-components';
import { media } from '../styled/util';

const Container = styled.div`
  color: #333;
  ${media.desktop`padding: 0 20px;`}
  ${media.tablet`padding: 0 10px;`}
  ${media.phone`padding: 0 5px;`}
`;

export default Container;
