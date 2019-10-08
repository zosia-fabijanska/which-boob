import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { white, peach } from '../constants/colours';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartButton = styled.button`
    border: 1px solid ${white};
    border-radius: 5px;
    background: ${peach};
    color: ${white}
    font-size: 18px;
    padding: 12px 40px;
    max-width: 50%;
`;

// CUSTOM HOOK: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useInterval(() => {
    if (isClicked) {
      setStartTime(startTime + 1);
    }
  }, 1000);

  const startTimer = () => {
    setIsClicked(!isClicked);
  }

  return (
    <ButtonContainer>
      <p>{startTime} seconds</p>
      <StartButton
        onClick={startTimer}
      >
        {isClicked ? 'PAUSE' : 'START'}
      </StartButton>
    </ButtonContainer >
  )
};

export default Timer;