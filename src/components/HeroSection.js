import React, { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { Spring, config } from 'react-spring/renderprops';
import {
  HeroSection, HeroSlogan, Img, ScrollUpButton,
} from '../styled/styledHero';
import img from '../img/agency.png';
import { arrowTopIcon } from '../img/svg';

const HeroComponent = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <HeroSection>
      <Spring
        config={config.slow}
        from={{ opacity: 0, transform: 'translate(-60%,0)', zIndex: -1 }}
        to={{ opacity: 1, transform: 'translate(0%,0)' }}
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
          </HeroSlogan>
        )}
      </Spring>

      <Img src={img} alt="hero image" />
      {offset > 600 && (
        <Spring
          config={config.slow}
          from={{ opacity: 0, transform: 'translate(60%,0)' }}
          to={{ opacity: 0.8, transform: 'translate(0%,0)' }}
        >
          {(props) => (
            <ScrollIntoView selector="#nav">
              <ScrollUpButton style={props}>{arrowTopIcon}</ScrollUpButton>
            </ScrollIntoView>
          )}
        </Spring>
      )}
    </HeroSection>
  );
};

export default HeroComponent;
