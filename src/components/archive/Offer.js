import React from 'react';
import { Grid, Row, Col, Label, Well } from 'react-bootstrap';
import styled from 'styled-components';

import Section from './Section';

const OfferBox = styled.div`
  background-color: white;
  padding: 2em;
`;

const Skill = styled.li`

`;

const OfferItem = (props) => {
  const {
    title,
    skills,
    description,
  } = props;
  return (
    <Well>
      <h3 style={{ 'word-wrap': 'break-word' }}>{title}</h3>
      <ul>
      {
        skills.map((skill, index) => (
          <Skill key={skill}>
            {skill}
          </Skill>
        ))
      }
      </ul>
      <div>
        {description}
      </div>
    </Well>

  )
}

const Offer = ({
  offers
}) => (
  <Section>
    <Grid>
      <h3>Expertice</h3>
      <Row>
      {
        offers.map((offer, index) => (
          <Col key={`offer-${index}`} md={4}>
            <OfferItem title={offer.title} description={offer.description} skills={offer.skills} />
          </Col>
        ))
      }
      </Row>
    </Grid>
  </Section>
);

export default Offer;
