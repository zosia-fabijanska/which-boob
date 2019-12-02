import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { peach, orange, white } from '../constants/colours';


const MainContainer = styled.div`
  background-image: linear-gradient(to bottom right, ${peach}, ${orange}); 
  min-height: 100vh;
  padding: 0 12px 62px 12px
`;

const FeedItemContainer = styled.div`
    border: 2px solid ${white};
    border-radius: 5px;
    padding: 6px;
    margin: 0 12px;
    background-color: rgba( 256, 256, 256, 0.1 );
    margin-bottom 62px; 
`; // change margin-bottom to only applied to the last item

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

const StrongSpan = styled.span`
  font-weight: 700;
`;

const History = ({ history }) => {

  console.log('HISTORY HISTORY', history.length);


  const historyItems = history.map((i) => {
    const totalTime = i.leftTime + i.rightTime;
    const side = i.lastFedOnLeftSide ? 'Left' : "Right";
    const dateTime = moment(i.date).format('MMM Do YYYY, h:mm a')

    return (
      <FeedItemContainer key={i.date}>
        <FeedItemText><StrongSpan>{dateTime}</StrongSpan></FeedItemText>
        <FeedItemText><StrongSpan>Total time: </StrongSpan>{totalTime} seconds</FeedItemText>
        <FeedItemText><StrongSpan>Last side: </StrongSpan>{side}</FeedItemText>
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