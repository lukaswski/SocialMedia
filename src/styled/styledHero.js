import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.reversed ? `#99CCFF` : `#FFF8E1`};
  color: ${props => props.reversed ? `white` : `#99CCFF`};
  border: none;
  width: 250px;
  height: 40px;
  letter-spacing: 3px;
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 2rem;
  box-shadow: 2px 2px 12px gray;
    &.HeroButton{
      margin-right: 20px;
    }
  @media(max-width: 980px){
    margin-left: 0;
    margin-right: 0;
    &.heroButton{
      margin-right: 20px;
    }
    };
    &:focus { 
      outline: 0; 
      }
    &:hover {
      background-color: ${props => props.reversed ?  `#FFF8E1` : `#99CCFF`};
      color: ${props => props.reversed ? `#99CCFF` : `white`};
    }
`;


export const HeroSection = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
    @media(max-width: 950px){
      flex-wrap: wrap;
      margin: 0 auto;
      padding-left: 0;
      height: unset;
    }
`;

export const HeroSlogan = styled.div`
  margin-left: 6rem;
  @media(max-width: 950px){
      margin-top: 10%;
      margin-left: 10%;
      width: 80%;
      height: 80%;
      
    }
`;

const move = keyframes`
  from {
    transform: translate(0, 100px);
    opacity: 0;
  };
  to {
    transform: translate(0, 0px);
    opacity: 1;
  };
`;

export const Img = styled.img`
  width: 50%;
  animation: ${move} 2s ease-in ;

  @media(max-width: 1050px){
    width: 40%;
    };
  @media(max-width: 950px){
    margin: 50px auto;
    width: 80%;
    };
`;


export const ScrollUpButton = styled(Button)`
  width: 60px;
  height: 60px;
  position: fixed;
  z-index: 5;
  right: 50px;
  bottom: 50px;
  border-radius: 10px;
  text-align: center;
  @media(max-width: 950px){
    bottom: 30px;
  }
`;