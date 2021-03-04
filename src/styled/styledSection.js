import styled from 'styled-components';

export const StyledSection = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100px;
  padding-top: 50px;
  background-color: ${props => props.price ? `white` : `lavender`};
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 30px;
  background-color: #003333;
  
  margin-bottom: 10%;
    @media(max-width: 620px){
      padding-bottom: 20px;
      margin-top: ${props => props.underCards && `20%`};
      }
    
`;

export const Steps = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const SingleStep = styled.div`
  width: 30%;
  background-color: #3399FF;
  border-radius: 20px;
  margin: 20px;
  margin-bottom: 150px;
  text-align: center;
  padding: 50px;
  box-shadow: 2px 2px 12px black;
    @media(max-width: 1195px){
      width: 80%;
      margin-bottom: 20px;
      }    
`;

export const LeftPrice = styled.div`
  width: 450px;
  height: 60px;
  margin-top:10px;
  padding-top: 10px;
  padding-right: 10px;
  text-align: right;
  background-color: ${props => props.second ? '#006699' : '#0099FF'};
  margin-bottom: 10px;
  box-shadow: 2px 2px 12px black;
    @media(max-width: 950px){
      width: 70%;
      }
    @media(max-width: 524px){
      width: 100%;
    }
`;

export const RightPrice = styled.div`
  display: block;
  float: right;
  width: 450px;
  height: 60px;
  padding-top: 10px;
  padding-left:10px;
  background-color: #003333;
  box-shadow: 2px 2px 12px black;
    @media(max-width: 950px){
      width: 70%;
      }
    @media(max-width: 524px){
      width: 100%;
      text-align: center;
    }
`;

export const CardImage = styled.img`
  margin-top: 10%;
  margin-bottom: 10%;
`;
