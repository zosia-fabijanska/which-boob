import React, { useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { white, darkPeach, lightPeach } from '../constants/colours';
import { finishFeed } from '../actions/actions';
import BoobIconContainer from './BoobIconContainer';

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DoneButton = styled.button`
    border: 2px solid ${({ disabled }) => disabled ? lightPeach : darkPeach};
    border-radius: 5px;
    background-color: ${white};
    color: ${({ disabled }) => disabled ? lightPeach : darkPeach};
    font-size: 1.1rem;
    font-weight: 700;
    padding: 12px 40px;
    width: 50%;
`;

const TotalTimeText = styled.p`
  color: ${white};
  font-size: 1.1rem;
  font-weight: 700;
`;


const Timer = ({ finishFeed }) => {
  const [leftFeedCounter, setLeftFeedCounter] = useState(0);
  const [rightFeedCounter, setRightFeedCounter] = useState(0);
  const [timeStarted, setTimeStarted] = useState('');
  const [leftSideActive, setLeftSideActive] = useState(undefined);
  const [isPaused, setIsPaused] = useState(true);

  const handleFinishFeed = () => {
    const date = timeStarted;
    const leftTime = leftFeedCounter;
    const rightTime = rightFeedCounter;
    const lastFedOnLeftSide = leftSideActive;

    finishFeed(date, leftTime, rightTime, lastFedOnLeftSide);
    setLeftFeedCounter(0);
    setRightFeedCounter(0);
    setLeftSideActive(undefined);
    setTimeStarted('');
    setIsPaused(true);
  };


  const totalTime = leftFeedCounter + rightFeedCounter;

  const secondsToTime = (time) => {
    return (time - (time %= 60)) / 60 + (9 < time ? ':' : ':0') + time
  }


  return (
    <div>
      <IconContainer>
        <BoobIconContainer
          feedCounter={leftFeedCounter}
          setFeedCounter={setLeftFeedCounter}
          isActive={leftSideActive === true}
          setIsActive={() => setLeftSideActive(true)}
          timeStarted={timeStarted}
          setTimeStarted={setTimeStarted}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          side='Left'
        />
        <BoobIconContainer
          feedCounter={rightFeedCounter}
          setFeedCounter={setRightFeedCounter}
          isActive={leftSideActive === false}
          setIsActive={() => setLeftSideActive(false)}
          timeStarted={timeStarted}
          setTimeStarted={setTimeStarted}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          side='Right'
        />
      </IconContainer>
      <ButtonContainer>
        <TotalTimeText>TOTAL TIME: {secondsToTime(totalTime)} seconds </TotalTimeText>
        <DoneButton disabled={!timeStarted} onClick={handleFinishFeed}>DONE</DoneButton>
      </ButtonContainer >
    </div >
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
)(Timer)
