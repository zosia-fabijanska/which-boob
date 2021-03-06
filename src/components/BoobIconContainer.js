import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { darkPeach, white } from '../constants/colours';
import { finishFeed } from '../actions/actions';

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BoobIcon = styled.button`
    background-color:  ${({ selected }) => selected ? darkPeach : white};
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
`;

const ButtonText = styled.p`
  color:  ${({ selected }) => selected ? white : darkPeach};
  font-weight: 700;
  font-size: 1.1rem;
`;

const PauseStartButton = styled.div`
  color:  ${({ selected }) => selected ? white : darkPeach};
  padding: 8px;
  border-radius: 10px;
  font-weight: 600;
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

// END OF CUSTOM HOOK

const BoobIconContainer = ({
  history,
  current,
  side,
  finishFeed,
  feedCounter,
  setFeedCounter,
  isActive,
  setIsActive,
  timeStarted,
  setTimeStarted,
  isPaused,
  setIsPaused
}) => {


  useInterval(() => {
    if (isActive) {
      setFeedCounter(feedCounter + 1);
    }
  }, !isPaused ? 1000 : null);


  let buttonText;

  if (!timeStarted) {
    buttonText = 'START';
  } else if (isActive && timeStarted && !isPaused) {
    buttonText = 'PAUSE';
  } else {
    buttonText = 'RESUME'
  }

  const secondsToMinutes = (time) => {
    if (time < 60) {
      return `${time} s`
    } else {
      return `${Math.floor(time / 60)}  m`;
    }
  };


  const handleClick = () => {
    if (!timeStarted) { // if it is the very first click
      setTimeStarted(Date.now());
      setIsPaused(false);
      setIsActive(true);
    } else if (isActive) { // if I'm the active container and I've been clicked
      setIsPaused(!isPaused);
    } else { // if I'm the inactive container and I've been clicked
      setIsActive(true);
      setIsPaused(false);
    }
  }

  return (
    <IconContainer>
      <BoobIcon
        onClick={handleClick}
        selected={isActive}
      >
        <ButtonText selected={isActive}>{side}: {secondsToMinutes(feedCounter)}</ButtonText>
        <PauseStartButton selected={isActive}>{buttonText}</PauseStartButton>
      </BoobIcon>
    </IconContainer >
  )

};

const mapStateToProps = (state) => {
  return {
    current: state.current,
    history: state.history,
  }
}

const mapDispatchToProps = { finishFeed }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoobIconContainer);