import styled, { css, keyframes } from 'styled-components';

export const Nav = styled.nav` 
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background: linear-gradient(90deg, rgba(36,146,255,1) 4%, rgba(51,153,255,1) 54%, rgba(110,183,255,1) 91%); 
  letter-spacing: 2px;
  color: white;
  margin: 0;

`;

export const BurgerWrapper = styled.div`
 display: ${(props) => props.burgerHidden && 'none'};
 cursor: pointer;
 position: relative;
`;

export const Burger = styled.div`
  background-color: white;
  width: 25px;
  height: 2px;
  margin: 5px;
    &.topLine{
      transform: ${(props) => props.isOpen && css`rotate(45deg); position: absolute`};
    };
    &.middleLine{
      opacity: ${(props) => props.isOpen && 0};
    };
    &.bottomLine{
      transform: ${(props) => props.isOpen && css`rotate(-45deg); position: absolute; bottom: 1px;`};
    };
`;

const open = keyframes`
  from {
    transform: translate(100%);
    opacity: 0;
    };

  to {
    transform: translate(0); 
    opacity: 1;
  };
`;

export const Ul = styled.ul`
  @media(max-width: 980px){
      width: 65%;
    };
  @media(max-width: 780px){
      width: 100%;
    };

${(props) => (props.burgerHidden
    ? css`
    color: white;
    list-style: none;
    width: 40%;
    justify-content: space-around;
    margin-bottom: 0px;
    `
    : css`
    flex-direction: column;
    padding-left: 0;
    position: absolute;
    top: 58px;
    background-color: #003333;
    height: 320px;
    width: 800px;
    text-align: center;

    display: ${(props) => props.isOpen && 'none'};
    animation: ${open} .5s ;
    `)};     
`;

export const Logo = styled.div`
 color: white;
 letter-spacing: 3px;
 font-size: 24px;
`;
