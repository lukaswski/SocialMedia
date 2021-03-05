import React from 'react';
import {
  Section, HeaderSection, LogosSlider, Img,
} from '../styled/storiesSectionStyled';
import adidas from '../img/logos/adidas.png';
import bp from '../img/logos/bp.png';
import visa from '../img/logos/visa.png';
import kfc from '../img/logos/kfc.png';
import burgerKing from '../img/logos/burgerKing.png';
import lacoste from '../img/logos/lacoste.png';
import doritos from '../img/logos/doritos.png';
import starbucks from '../img/logos/starbucks.png';
import hbo from '../img/logos/hbo.png';
import harley from '../img/logos/harley.png';
import cocaCola from '../img/logos/cocaCola.png';
import google from '../img/logos/google.png';
import ibm from '../img/logos/ibm.png';

const logos = [
  adidas, bp, visa, kfc, burgerKing, lacoste, ibm,
  doritos, starbucks, hbo, harley, cocaCola, google,
];

const StoriesSection = () => (
  <Section id="stories">
    <HeaderSection>
      <h3>Our buissnes partners:</h3>
    </HeaderSection>
    <LogosSlider>
      {logos.map((logo) => <Img src={logo} alt={logo} key={logo} />)}
    </LogosSlider>
    <LogosSlider className="reversed">
      {logos.map((logo) => <Img src={logo} alt={logo} key={logo} />)}
    </LogosSlider>

  </Section>
);

export default StoriesSection;
