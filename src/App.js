import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BoobIconContainer from './components/BoobIconContainer';
import Timer from './components/Timer';
import Notification from './components/Notification';
import NavBar from './components/NavBar';
import { peach } from './constants/colours';


const MainContainer = styled.div`
  background: ${peach}; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <BoobIconContainer />
      <Timer />
      <Notification />
      <NavBar />
    </MainContainer>
  );
}

export default App;
