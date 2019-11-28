import React from 'react';

import styled from 'styled-components';
import { peach, orange } from '../constants/colours';


const MainContainer = styled.div`
  background-image: linear-gradient(to bottom right, ${peach}, ${orange}); 
  height: calc(100vh - 50px);
  padding-top: 0;
`;

const History = ({ history }) => {


  if (history.length) {
    history.map((i) => {
      const totalTime = i.leftTime + i.rightTime;
      const side = i.lastFedOnLeftSide ? 'LEFT' : "RIGHT";

      return (<MainContainer>
        <p>Total time: {totalTime} </p>
        <p>Last side: {side}</p>
        <p>Date and Time of feed: {i.date}</p>
      </MainContainer>)

    })
  }

  console.log('HISTORY HISTORY', history);
  return (
    <MainContainer>
      <p>History</p>
    </MainContainer>
  )

}

export default History;