import React from 'react';
import {
  Modal, Wrapper, PriceSum,
} from './styled/styledChart';
import { Button } from './styled/styledHero';

const ModalComponent = ({ setModalIsOpen, initialArray, initialState }) => (
  <Modal>
    <div><h1>Dreamed price!</h1></div>
    <br />
    <Wrapper>
      <div>{initialArray.map((points) => <div>{points}</div>)}</div>
      <div>{initialState.labels.map((label) => <div>{label}</div>)}</div>
    </Wrapper>
    <hr />
    <Wrapper>
      <div><h4>TOTAL PRICE:</h4></div>
      <div><h1 className="money">1 500$</h1></div>
    </Wrapper>
    <PriceSum>
      <p>
        Very good choice, find Your way with girls and money,
        <br />
        {' '}
        and capture it on you Instagram!
      </p>
    </PriceSum>
    <Button onClick={() => setModalIsOpen(false)}>Dissmiss offer</Button>
    <Button reversed>Accept the price</Button>
  </Modal>
);

export default ModalComponent;
