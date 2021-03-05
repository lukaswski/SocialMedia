import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';
import ScrollIntoView from 'react-scroll-into-view';
import {
  Nav, Burger, BurgerWrapper, Logo, Ul,
} from '../styled/styledNav';

const NavComponent = () => {
  const navbarNames = [
    { name: 'First steps', selectorId: '#card' },
    { name: 'Prices', selectorId: '#chart' },
    { name: 'Partners', selectorId: '#stories' },
    { name: 'Contact', selectorId: '#footer' },
  ];
  const [hidden, setHidden] = useState(true);
  const [openNavbar, setOpenNavbar] = useState(true);

  const BurgerOrNavbar = () => document.body.clientWidth < 870 && setHidden(false);

  useEffect(() => {
    BurgerOrNavbar();
  }, []);

  return (
    <Spring
      from={{ opacity: 0, transform: 'translate(0, -60%)' }}
      to={{ opacity: 1, transform: 'translate(0 ,0)' }}
    >
      {(props) => (
        <Nav style={props} id="nav">
          <Logo>
            SocialNinja
          </Logo>
          <Ul burgerHidden={hidden} isOpen={openNavbar}>
            {navbarNames.map(({ name, selectorId }) => (
              <ScrollIntoView selector={selectorId} key={selectorId}>
                <li onClick={() => setOpenNavbar(true)}>
                  {name}
                </li>
              </ScrollIntoView>
            ))}
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
