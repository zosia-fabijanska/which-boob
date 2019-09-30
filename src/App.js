import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BoobIconContainer from './components/BoobIconContainer';
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
      <NavBar />
    </MainContainer>
  );
}

export default App;
