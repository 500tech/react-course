import React from 'react';
import styled from 'styled-components';

// components
import Timer from './Timer';

const Timers = ({ list, removeTimer }) => {
  return (
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
