import styled from 'styled-components';

export const Input = styled.input`
  width: 70%;
  margin: 5px;
  border-radius: 10px;
  border: none;
  height: 40px;
  padding-left: 10px;
    :focus{
      outline: none;
      background-color: lavender;
}
`;

export const FieldRequired = styled.div`
  color: red;
`;

export const Textarea = styled.textarea`
  width: 70%;
  margin: 5px;
  border-radius: 10px;
  border: none;
  height: 120px;
  padding-left: 10px;
  
    :focus{
      outline: none;
      background-color: lavender;
}
`;

export const StyledFormName = styled.div`
  margin: 0 auto;
  padding-top: 8px;
  background-color: #006699;
  width: 90%;
  height: 45px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
    &:before{
      content: ' ';
      width: 100%;
      height: 45px;
      z-index: -1;
      background-color: #0099FF;
      position: absolute;
      top: -5px;
      left: 5px;
    }
`;