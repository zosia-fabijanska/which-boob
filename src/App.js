import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BoobIcon from './components/BoobIcon';
import {peach} from './constants/colours';


const MainContainer = styled.div`
  background: ${peach}; 
  height: 100vh;
`;

const IconContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <MainContainer>
      <Header/>
      <div>
        <BoobIcon/>
        <BoobIcon/>
      </div>
    </MainContainer>
  );
}

export default App;
