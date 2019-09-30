import React from 'react';
import styled from 'styled-components';
import home from '../assets/home.svg';
import activity from '../assets/development.svg';

const NavIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: solid 2px #ffffff;
  padding: 12px 0;
`;

const NavIcons = styled.img`
    max-width: 36px;
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavIconContainer>
        <NavIcons src={home} alt="home icon" />
        <NavIcons src={activity} alt="activity log icon" />
      </NavIconContainer>
    )
  }
};

export default NavBar;