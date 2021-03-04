import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import {
  Button, HeroSection, HeroSlogan, Img,
} from '../styled/styledHero';
import img from '../img/agency.png';

const HeroComponent = () => (
  <HeroSection>
    <Spring
      config={config.slow}
      from={{ opacity: 0, transform: 'translate(-60%,0)', zIndex: -1}}
      to={{ opacity: 1, transform: 'translate(0%,0)'}}
    >
      {(props) => (
        <HeroSlogan style={props}>
          <h1>
            Social Media
            <br />
            {' '}
            Marketing
          </h1>
          <h3>How To Get More Audience</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor s nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum.
          </p>
          <Button reversed className="heroButton">Sign Up</Button>
          <Button>Login</Button>
        </HeroSlogan>
      )}
    </Spring>

    <Img src={img} alt="hero image" />
  </HeroSection>
);

export default HeroComponent;
