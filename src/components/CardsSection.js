import React from 'react';
import {
  StyledSection, Slider, SingleStep, Steps, CardImage,
} from '../styled/styledSection';
import auience from '../img/audience.png';
import photograph from '../img/photograph.png';
import increaseMoney from '../img/increaseMoney.png';

const cards = [
  {
    title: 'Take a fotos',
    img: photograph,
    width: '80%',
    paragraph: 'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Find the audience',
    img: auience,
    width: '80%',
    paragraph: 'Duis aute irure dolor in reprehenderit in voluptate',
  },
  {
    title: 'Increase income!',
    img: increaseMoney,
    width: '80%',
    paragraph: 'Lorem sed do eiusmod tempor s nostrud unmo wne paownasef',
  },
];

const CardsSection = () => (
  <StyledSection>
    <Slider>
      <h3>Everybody can be a internet Influencer!</h3>
    </Slider>
    <Steps>
      {cards.map(({
        title, img, width, paragraph,
      }) => (
        <SingleStep key={title}>
          <h3>{title}</h3>
          <div>
            <CardImage  src={img} width={width} />
          </div>
          <p>{paragraph}</p>
        </SingleStep>
      ))}
    </Steps>
    <Slider cards underCards>
      <h2>Stars can be everyware!</h2>
      <br />
      <br />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </p>
      <br />
    </Slider>
  </StyledSection>
);

export default CardsSection;
