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
  const [feedCounter, setFeedCounter] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [timeStarted, setTimeStarted] = useState('');

  console.log('TIME STARTED', timeStarted);

  const handleFinishFeed = () => {
    const date = timeStarted;
    const leftTime = feedCounter;
    const rightTime = 'blah';

    finishFeed(date, leftTime, rightTime)
  };

  return (
    <div>
      <IconContainer>
        <BoobIconContainer
          feedCounter={feedCounter}
          setFeedCounter={setFeedCounter}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          timeStarted={timeStarted}
          setTimeStarted={setTimeStarted}
          side='Left'
        />
        <BoobIconContainer
          feedCounter={feedCounter}
          setFeedCounter={setFeedCounter}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          timeStarted={timeStarted}
          setTimeStarted={setTimeStarted}
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
