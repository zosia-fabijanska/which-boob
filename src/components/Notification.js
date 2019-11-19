import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import _ from 'lodash';
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

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: <NotificationText>Welcome! Start recording your first feed!</NotificationText>
    }
  }

  componentDidUpdate(prevProps) {

    const { lastFedOnLeftSide } = _.last(this.props.history);
    if (this.props.history !== prevProps.history) {
      this.setState({ notification: <NotificationText>You last fed on the <StrongSpan>{lastFedOnLeftSide ? 'LEFT' : 'RIGHT'}</StrongSpan> side, [time] ago</NotificationText> });
    }
  };

  render() {
    return (
      <NotificationContainer>
        {this.state.notification}
      </NotificationContainer>
    )
  }

};

const mapStateToProps = (state) => {
  return {
    history: state.history,
  }
}


export default connect(
  mapStateToProps,
)(Notification);