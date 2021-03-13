import styled from 'styled-components';

export const GraphPage = styled.div`
display: flex;
@media(max-width: 950px){
    flex-wrap: wrap;
    }
`;

export const ChartWrapper = styled.div`
  display: flex;
  margin: 30px auto;
  width: 80%;
  order: 1;
`;

export const Table = styled.div`
  padding: 40px;
  width: 50%;
  text-align: center;
  @media(max-width: 950px){
  width: 100%;
  order: 2;
    };
`;

export const SliderInput = styled.input`
  width: 80%;
  margin-bottom: 35px;
`;

export const Modal = styled.div`
  width: 90%;
  opacity: 1;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  background-color: white;
  margin: 10px auto;
  box-shadow: 5px 5px 15px gray;
  padding: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 55px;
  justify-content: space-around;
  align-items: baseline;
    @media(max-width: 950px){
      flex-wrap: wrap;
    }
`;

export const PriceSum = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: #003333;
  @media(max-width: 950px){
    width: 100%;

    }
`;