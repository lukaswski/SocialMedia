import React, { useState } from 'react';
import { Doughnut } from '@reactchartjs/react-chart.js';
import {
  ChartWrapper, Table, GraphPage, SliderInput, Modal, Wrapper,
} from './styled/styledChart';
import { Button } from './styled/styledHero';
import ModalComponent from './ModalComponent';


const ChartPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [initialArray, setInitialArray] = useState([50, 50, 50, 50, 50]);
  const initialState = {
    labels: ['Friends', 'Likes', 'Splendor', 'Money', 'Girls'],
    datasets: [
      {
        label: '# of Votes',
        data: initialArray,
        backgroundColor: [
          '#A1887F',
          '#4FC3F7',
          '#FFCC33',
          '#00CC33',
          '#FF3366',
        ],
        borderColor: [
          '#5D4037',
          '#039BE5',
          '#FFCC00',
          '#009900',
          '#CC0033',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartHandler = (e, index) => {
    initialArray.splice(index, 1, parseInt(e.target.value));
    setInitialArray([...initialArray]);
  };

  return (
    <>
      {modalIsOpen
        && (
        <ModalComponent
          setModalIsOpen={setModalIsOpen}
          initialArray={initialArray}
          initialState={initialState}
        />
        )}

      <GraphPage>
        <Table>
          {initialState.labels.map((label, index) => (
            <div key={label}>
              <div htmlFor="volume">{label}</div>
              <SliderInput
                type="range"
                id={index}
                name={label}
                min="0"
                max="100"
                onChange={(e) => chartHandler(e, index)}
              />
            </div>
          ))}
          <Button reversed onClick={() => setModalIsOpen(true)}>Check price</Button>
        </Table>
        <ChartWrapper>
          <Doughnut data={initialState} />
        </ChartWrapper>
      </GraphPage>
    </>
  );
};

export default ChartPage;
