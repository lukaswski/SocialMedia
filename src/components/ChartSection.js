import React from 'react';
import {
  StyledSection, LeftPrice, RightPrice,
} from '../styled/styledSection';
import ChartPage from '../ChartPage';

const ChartSection = () => (
  <StyledSection price>
    <LeftPrice>
      <h3>What is the price?</h3>
    </LeftPrice>
    <LeftPrice second>
      <h3>Tell us what you want!</h3>
    </LeftPrice>
    <ChartPage />
    <RightPrice>
      <h3>not too much shure?</h3>
    </RightPrice>
  </StyledSection>
);

export default ChartSection;
