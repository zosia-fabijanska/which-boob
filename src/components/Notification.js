import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import moment from 'moment';
import { white, darkPeach } from '../constants/colours';

const NotificationContainer = styled.div`
    border: 1px solid ${white};
    border-radius: 5px;
    padding: 6px;
    margin: 0 12px;
    background-color: rgba( 256, 256, 256, 0.1 );
`;

const NotificationText = styled.p`
    font-size: 16px;
    color: ${white};
    text-align: center;
`;

const StrongSpan = styled.span`
  font-weight: 700;
  color: ${darkPeach};
`;

const Notification = ({ history }) => {


  if (history.length) {
    const { lastFedOnLeftSide, date } = _.last(history);

    const timeLastFed = moment(date).format('LT');;


    return (
      <NotificationContainer>
        <NotificationText>You last fed on the
        <StrongSpan>{lastFedOnLeftSide ? ' LEFT ' : ' RIGHT '}</StrongSpan>side, starting at <StrongSpan>{timeLastFed}.</StrongSpan>
        </NotificationText>
      </NotificationContainer>
    )
  }
  console.log('HOME HISTORY', history);
  return (
    <NotificationContainer>
      <NotificationText>Welcome! Start recording your first feed!</NotificationText>
    </NotificationContainer>
  )
};


export default Notification;