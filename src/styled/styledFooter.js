import styled from 'styled-components';

export const Footer = styled.div`
  height: 100vh;
  background-color: #003333; 
  text-align: center;
    @media(max-width: 950px){
      height: 120vh;
      }
`;

export const SocialLogo = styled.div`
  :hover{
    cursor: pointer;
    &.tw{
      color: #1DA1F2;;
    }
    &.yt{
      color: #FF0000;
    }
    &.fb{
      color: #4267B2;
    }
    &.ig{
      border-radius: 12px;
      background: #f09433; 
      background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
      background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
      background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 10px;
    @media(max-width: 950px){
      margin-bottom: 80px;
      }
`;

export const TopText = styled.div`
  height: 120px;
  padding-top: 35px;
`;

export const Main = styled.div`
  display: flex;
  height: 68vh;
  color: white;
    @media(max-width: 950px){
      flex-wrap: wrap;
      }
`;

export const MapSite = styled.div`
width: 60%;
height: 80vh;
background-color: lightyellow;
position: relative;
z-index: 0;
order: 1;
  &:before{
    position: absolute;
    z-index: 1;
    content: 'Kościuszki 76, 61-892 Poznań';
    font-size: 18px;
    padding-top: 10px;
    width: 50%;
    opacity: .8;
    height: 10%;
    color: white;
    top: 30%;
    left: 40%;
    background-color: #003333;
  }
    @media(max-width: 950px){
      width: 100%;
    };
`;

export const FormSite = styled.div`
  width: 50%;
  background-color: #003333; 
  order: 0;
  height: 70vh;
    @media(max-width: 950px){
      width: 100%;
      margin-top: 80px;
      height: unset;
      padding-bottom: 30px;
      }
`;