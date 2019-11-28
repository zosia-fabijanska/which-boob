import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { peach, orange, white } from '../constants/colours';


const MainContainer = styled.div`
  background-image: linear-gradient(to bottom right, ${peach}, ${orange}); 
  height: calc(100vh - 50px);
  padding: 0 12px;
`;

const FeedItemContainer = styled.div`
    border: 1px solid ${white};
    border-radius: 5px;
    padding: 6px;
    margin: 0 12px;
    background-color: rgba( 256, 256, 256, 0.1 );
`;

const FeedItemText = styled.p`
  color: ${white};
`;

const FeedHeader = styled.p`
  color: ${white};
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 0;
  padding-top: 12px;

`;

const History = ({ history }) => {

  console.log('HISTORY HISTORY', history.length);


  const historyItems = history.map((i) => {
    const totalTime = i.leftTime + i.rightTime;
    const side = i.lastFedOnLeftSide ? 'LEFT' : "RIGHT";
    const dateTime = moment(i.date).format('MMM Do YYYY, h:mm a')

    return (
      <FeedItemContainer key={i.date}>
        <FeedItemText>Total time: {totalTime} </FeedItemText>
        <FeedItemText>Last side: {side}</FeedItemText>
        <FeedItemText>{dateTime}</FeedItemText>
      </FeedItemContainer>

    )

  })

  const noHistory = <FeedItemContainer><FeedItemText>Welcome, record your first feed to see your history!</FeedItemText></FeedItemContainer>

  console.log('HISTORY ITEMS', historyItems);


  return (
    <MainContainer>
      <FeedHeader>Your Feed Log:</FeedHeader>
      {history.length ? historyItems : noHistory}
    </MainContainer>
  )

}

export default History;