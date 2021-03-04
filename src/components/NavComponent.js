import React, { useState, useEffect } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import {
  Nav, Burger, BurgerWrapper, Logo, Ul,
} from '../styled/styledNav';

const NavComponent = () => {
  const [hidden, setHidden] = useState(true);
  const [openNavbar, setOpenNavbar] = useState(true);
  const BurgerOrNavbar = () => document.body.clientWidth < 870 && setHidden(false);

  useEffect(() => {
    BurgerOrNavbar();
  }, []);


  return (
    <Spring
      from={{ opacity: 0, transform: 'translate(0, -60%)' }}
      to={{ opacity: 1, transform: 'translate(0 ,0)' }} >
      {(props) => (
        <Nav style={props}>
          <Logo>
            SocialNinja
          </Logo>
          <Ul burgerHidden={hidden} isOpen={openNavbar}>
            <li>First Steps</li>
            <li>Prices</li>
            <li>Partners</li>
            <li>Contact</li>
          </Ul>
          <BurgerWrapper burgerHidden={hidden} onClick={() => setOpenNavbar(!openNavbar)}>
            <Burger isOpen={!openNavbar} className="topLine" />
            <Burger isOpen={!openNavbar} className="middleLine" />
            <Burger isOpen={!openNavbar} className="bottomLine" />
          </BurgerWrapper>
        </Nav>
      )}
    </Spring>
  );
};

export default NavComponent;
