import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body{
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, rgba(36,146,255,1) 4%, rgba(51,153,255,1) 54%, rgba(110,183,255,1) 91%);
  };

  ul{
    display: flex;
    list-style: none;
    width: 40%;
    justify-content: space-around;
    margin-bottom: 0px;

    @media(max-width: 980px){
      width: 65%;
    };
  };

  p {
    color: white;
  };

  li {
    cursor: pointer;
    :hover{
      color: whitesmoke;
    }
  }

  h1{
    color: #003333;
    font-weight: 900;
    font-size: 5rem;
    letter-spacing: 2px;
      &.money{
        color: darkgreen;
      }
    @media(max-width: 950px){
      font-size: 3rem;
   };

  };
  
  h2 {
     color: white;
     letter-spacing: 3px;
   };

  h3{
    color: white;
    font-size: 2rem;
    font-weight: 800;
  }; 
  
  `;

export default GlobalStyle;
