import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import home from '../assets/home.svg';
import activity from '../assets/development.svg';
import { white } from '../constants/colours';

const NavIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: solid 2px ${white};
  padding: 12px 0;
  flex-grow: 0;
  flex-basis: 50px;
`;

const NavIcons = styled.img`
    max-width: 36px;
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavIconContainer>
        <Link to='/'>
          <NavIcons src={home} alt="home icon" />
        </Link>
        <Link to='/history'>
          <NavIcons src={activity} alt="activity log icon" />
        </Link>
      </NavIconContainer>
    )
  }
};

export default NavBar;