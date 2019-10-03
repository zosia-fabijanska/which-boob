import React from 'react';
import styled from 'styled-components';
import breastIcon from '../assets/breastWhite.svg';

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BoobIconLeft = styled.img`
    max-width: 120px;
    transform: scaleX(-1);
    margin: 0 16px;
`;

const BoobIconRight = styled.img`
    max-width: 120px;
    margin: 0 16px;
`;

class BoobIconContainer extends React.Component {
  render() {
    return (
      <IconContainer>
        <BoobIconLeft src={breastIcon} alt='icon of left breast' />
        <BoobIconRight src={breastIcon} alt='icon of right breast' />
      </IconContainer>
    )
  }
};

export default BoobIconContainer;