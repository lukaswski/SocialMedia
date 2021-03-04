import React from 'react';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import ChartSection from './components/ChartSection';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import StoriesSection from './components/StoriesSection';


const App = () => (
  <>
    <NavComponent />
    <HeroSection />
    <CardsSection />
    <ChartSection />
    <StoriesSection />
    <FooterComponent />
  </>
);

export default App;
