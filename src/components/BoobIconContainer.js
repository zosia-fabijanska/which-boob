import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
// import breastIcon from '../assets/breastWhite.svg';
import { finishFeed } from '../actions/actions';

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BoobIcon = styled.div`
    width: 120px;
    height: 120px;
    border: 3px solid #ffffff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.1rem;
`;

const PauseStartButton = styled.div`
  background-color: rgba( 256, 256, 256, 0.2 );
  color: #ffffff;
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
  isClicked,
  setIsClicked,
  timeStarted,
  setTimeStarted
}) => {

  useInterval(() => {
    if (isClicked) {
      setFeedCounter(feedCounter + 1);
    }
  }, 1000);


  const startCounter = () => {
    setTimeStarted(Date.now());
    setIsClicked(!isClicked);
  }

  return (
    <IconContainer>
      <BoobIcon onClick={startCounter} >
        <ButtonText>{side}: {feedCounter} s</ButtonText>
        <PauseStartButton>{isClicked ? 'PAUSE' : 'START'}</PauseStartButton>
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
)(BoobIconContainer)