import React from 'react';
import { Grid, Row, Col, Label, Well } from 'react-bootstrap';
import styled from 'styled-components';

import Section from './Section';

const OfferBox = styled.div`
  background-color: white;
  padding: 2em;
`;

const Skill = styled.span`
  padding-right: 3px;
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
      <div>
      {
        skills.map((skill, index) => (
          <Skill>
            <Label key={`skill-${index}`}>{skill}</Label>
          </Skill>
        ))
      }
      </div>
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
      <h3>What i do ...</h3>
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
