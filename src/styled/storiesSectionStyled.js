import styled, { keyframes } from 'styled-components';

export const Section = styled.div`
  width: 100%;
  padding-bottom: 60px;
  background-color: white;
  overflow: hidden;
`;

export const HeaderSection = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  background: linear-gradient(90deg, rgba(36,146,255,1) 4%, rgba(51,153,255,1) 54%, rgba(110,183,255,1) 91%);
`;

export const Img = styled.img`
  width: 200px;
  margin: 20px;
  box-shadow: 2px 12px 22px gray;
  filter: grayscale(80%);
  opacity: 0.5;
  cursor: pointer;
    :hover{
      filter: none;
      opacity: 1;
    }
  @media(max-width: 950px){
    width: 120px;
  }
`;

const slide = keyframes`
  from {
    transform: translate(-50%);  
  }

  to {
    transform: translate(25%);
  }
`;
const slideReverse = keyframes`
  from {
    transform: translate(25%);  
  }

  to {
    transform: translate(-25%);
  }
`;

export const LogosSlider = styled.div`
  margin-top: 60px;
  display: flex;
  overflow: initial;
  scroll-behavior: none;
  justify-content: space-evenly;
  animation: ${slide} 15s infinite linear alternate;
  &.reversed{
    animation: ${slideReverse} 15s infinite linear alternate;
    
  }
`;