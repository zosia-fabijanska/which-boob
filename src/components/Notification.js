import React from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 6px;
    margin: 0 12px;
`;

const NotificationText = styled.p`
    font-size: 16px;
    color: #ffffff;
    text-align: center;
`;

class Notification extends React.Component {
  render() {
    return (
      <NotificationContainer>
        <NotificationText>You last fed on the <strong>LEFT</strong> side</NotificationText>
      </NotificationContainer>
    )
  }
};

export default Notification;