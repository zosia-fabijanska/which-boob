import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Timer from './components/Timer';
import Notification from './components/Notification';
import NavBar from './components/NavBar';
import { peach, orange } from './constants/colours';


const MainContainer = styled.div`
  background-image: linear-gradient(to bottom right, ${peach}, ${orange}); 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <Timer />
      <Notification />
      <NavBar />
    </MainContainer>
  );
}

export default App;
