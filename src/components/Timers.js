import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

// components
import Timer from './Timer';

const Timers = ({ list, removeTimer }) => {
  return (
    <Fade top>
      <Container>
        {
          list.map(card =>
            <Timer
              key={card.id}
              label={card.label}
              removeTimer={() => removeTimer(card.id)}
            />
          )
        }
      </Container>
    </Fade>
  );
};

export default Timers;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
