import React from 'react';
import CenteredText from '../styled/CenteredText';

const ValueExpertice = ({
  expertice,
}) => (
  <CenteredText>
    {
      expertice.map(item => (
        <div key={item.title}>
          <strong>{item.title}</strong>
          <div>
            {item.skills.join(', ')}
          </div>
        </div>

      ))
    }
  </CenteredText>
);

export default ValueExpertice;
