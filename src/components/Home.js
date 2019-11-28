import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Notification from '../components/Notification';
import { peach, orange } from '../constants/colours';


const MainContainer = styled.div`
  background-image: linear-gradient(to bottom right, ${peach}, ${orange}); 
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Home = () => {

    return (
        <MainContainer>
            <Header />
            <Timer />
            <Notification />
        </MainContainer>
    );

}

export default Home;