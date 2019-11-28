import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import Home from './components/Home';
import History from './components/History';
import home from './assets/home.svg';
import activity from './assets/development.svg';
import { white } from './constants/colours';


const NavIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${white};
  padding: 12px 0;
  flex-grow: 0;
  flex-basis: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavIcons = styled.img`
    max-width: 36px;
`;

const App = ({ history, current }) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home history={history} current={current} />
        </Route>
        <Route exact path="/history" >
          <History history={history} />
        </Route>
      </Switch>

      <NavIconContainer>
        <Link to='/'>
          <NavIcons src={home} alt="home icon" />
        </Link>
        <Link to='/history'>
          <NavIcons src={activity} alt="activity log icon" />
        </Link>
      </NavIconContainer>

    </Router >
  );

};

const mapStateToProps = (state) => {
  return {
    history: state.history,
    current: state.current
  }
}

export default connect(
  mapStateToProps
)(App);
