import React, { useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { white } from '../constants/colours';
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
    border: 1px solid ${white};
    border-radius: 5px;
    background-color: rgba( 256, 256, 256, 0.2 );
    color: ${white}
    font-size: 18px;
    padding: 12px 40px;
    width: 50%;
`;


const Timer = ({ current, history, finishFeed }) => {
  const [leftFeedCounter, setLeftFeedCounter] = useState(0);
  const [rightFeedCounter, setRightFeedCounter] = useState(0);
  const [timeStarted, setTimeStarted] = useState('');
  const [leftSideActive, setLeftSideActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const handleFinishFeed = () => {
    const date = timeStarted;
    const leftTime = leftFeedCounter;
    const rightTime = rightFeedCounter;

    finishFeed(date, leftTime, rightTime);
    setLeftFeedCounter(0);
    setRightFeedCounter(0);
    setLeftSideActive(false);
    setTimeStarted('');
    setIsPaused(true);
  };

  console.log('HISTORY', history);

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
        <p style={{ color: '#ffffff' }}>TOTAL TIME: </p>
        <DoneButton onClick={handleFinishFeed}>DONE</DoneButton>
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
