import React from 'react';
import {
  Footer, Main, MapSite, FormSite, TopText, SocialWrapper, SocialLogo,
} from '../styled/styledFooter';
import {
  youtubeIcon, facebookIcon, instagramIcon, twitterIcon,
} from '../img/svg';
import FormComponent from './FormComponent';
import MapGoogleComponent from './mapComponent';

const FooterComponent = () => (
  <Footer>
    <TopText>
      <h3>Catch us on social</h3>
    </TopText>
    <Main>
      <FormSite>
        <SocialWrapper>
          <SocialLogo className="fb">{facebookIcon}</SocialLogo>
          <SocialLogo className="yt">{youtubeIcon}</SocialLogo>
          <SocialLogo className="ig">{instagramIcon}</SocialLogo>
          <SocialLogo className="tw">{twitterIcon}</SocialLogo>
        </SocialWrapper>
        <FormComponent />
      </FormSite>
      <MapSite>
        <MapGoogleComponent />
      </MapSite>
    </Main>

  </Footer>
);

export default FooterComponent;
